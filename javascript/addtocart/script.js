// Cart array to hold items
let cart = [];

// Add to Cart button functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        addToCart(name, price);
    });
});

// Add item to cart
function addToCart(name, price) {
    const item = cart.find((product) => product.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

// Update the cart UI
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} x ${item.quantity} 
            <button onclick="removeFromCart('${item.name}')">remove</button>`;
        cartItems.appendChild(li);

        total += item.price * item.quantity;
    });

    cartTotal.innerText = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(name) {
    cart = cart.filter((item) => item.name !== name);
    updateCart();
}

// Clear the cart
function clearCart() {
    cart = [];
    updateCart();
}
