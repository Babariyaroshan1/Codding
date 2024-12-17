
// scroll-button

let currentPosition = 0;

function moveSlider(direction) {
  const slider = document.querySelector('.slider');
  const cardWidth = slider.querySelector('.card').offsetWidth + 14; // Card width + gap
  currentPosition += direction * cardWidth;
  slider.scrollTo({
    left: currentPosition,
    behavior: 'smooth',
  });
}
// pluse-button

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".icon");

  // Toggle visibility
  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    answer.style.display = "block";
    icon.textContent = "×";
  }
}