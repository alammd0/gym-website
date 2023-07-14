const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
