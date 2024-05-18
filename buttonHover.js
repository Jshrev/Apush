const scrollBtns = document.querySelectorAll('.scroll-btn');

scrollBtns.forEach(button => {
  button.addEventListener('mouseover', () => button.classList.add('hover'));
  button.addEventListener('mouseout', () => button.classList.remove('hover'));
});
