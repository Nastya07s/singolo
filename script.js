const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
  nav.querySelectorAll('li').forEach(i => {
    if (event.target !== i)
      i.classList.remove('link-active');
    else
      i.classList.add('link-active');
  });
})

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider-item');
let current = 0;
const numberOfSlides = 1;
slides.forEach(el => el === slides[current] ? el.style.display = 'flex' : el.style.display = 'none');

const changeSlide = () => {
  current--;
  if (current < 0) {
    current = numberOfSlides;
    slides[current].style.display = 'flex';
    slides[current - 1].style.display = 'none';
    slider.style.backgroundColor = '#648BF0';
    slider.style.borderBottom = '6px solid rgb(58, 78, 201)';
  } else {
    slides[current].style.display = 'flex';
    slides[current + 1].style.display = 'none';
    slider.style.backgroundColor = '#f06c64';
    slider.style.borderBottom = '6px solid #ea676b';
  }
}

const arrowLeft = document.querySelector('.slider  .arrow-right');
arrowLeft.addEventListener('click', () => changeSlide());

const arrowRight = document.querySelector('.slider  .arrow-left');
arrowRight.addEventListener('click', () => changeSlide());

const switchScreen = (el) => el.style.zIndex == 2 ? el.style.zIndex = '-1' : el.style.zIndex = '2';

const verticalButton = document.querySelector('.vertical-phone__button');
verticalButton.addEventListener('click', () => switchScreen(document.querySelector('.vertical-phone__off')));

const horizontalButton = document.querySelector('.horizontal-phone__button');
horizontalButton.addEventListener('click', () => switchScreen(document.querySelector('.horizontal-phone__off')));

const navButtons = document.querySelector('.nav');
const button = navButtons.querySelectorAll('button');

button.forEach(i => {
  i.addEventListener('click', () => {
    let gallery = document.querySelector('.examples');
    let pictures = Array.from(gallery.querySelectorAll('.example'));
    pictures = pictures.sort(() => Math.random() - 0.5);
    gallery.innerHTML = "";
    pictures.forEach(pic => gallery.append(pic))
  })
})

navButtons.addEventListener('click', (event) => {
  button.forEach(i => {
    if (event.target !== i)
      i.classList.remove('button-active');
    else
      i.classList.add('button-active');
  });
})