//This script was made for implementing cache functionality
const toggleBtn = document.querySelector('.flip-button');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.querySelector('.flip-button').classList.toggle('flipped');
});