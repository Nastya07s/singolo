const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
  nav.querySelectorAll('a').forEach(i => {
    i.classList.remove('link-active');
  });
  event.target.classList.add('link-active');
})