const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
  nav.querySelectorAll('a').forEach(i => {
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

const gallery = document.querySelector('.examples');
gallery.addEventListener('click', (event) => {
  gallery.querySelectorAll('.example').forEach(i => {
    if (event.target.parentNode !== i)
      i.classList.remove('example-active');
    else
      i.classList.add('example-active');
  })
});

const form = document.getElementById('form');
const buttonSubmit = form.querySelector('input[type=submit]');
form.addEventListener('submit', event => event.preventDefault());
buttonSubmit.addEventListener('click', (event) => {
  const inputs = form.querySelectorAll('input:not([type="submit"])');
  if (!inputs[0].checkValidity() || !inputs[1].checkValidity()) {
    return;
  };
  let modal = document.querySelector('.modal');
  let modalContent = document.querySelector('.modal .content');
  let formTextarea = form.querySelector('textarea');
  let modalDesc = document.querySelector('#desc');

  modal.style.display = 'block';
  modal.querySelector('#subject').innerText = inputs[2].value === '' ? 'Без темы' : `Тема: ${inputs[2].value}`;
  modalDesc.innerText = formTextarea.value === '' ? 'Без описания' : `Описание: ${formTextarea.value}`;
  modal.querySelector('button').addEventListener('click', () => {
    modal.style.display = 'none';
    inputs.forEach(input => {
      input.value = "";
    });
    formTextarea.value = "";
  })
  modalDesc.style.height = '60%';
  if (formTextarea.value.length = 0) {
    modalDesc.style.height = '45px';
  } else if (formTextarea.value.length <= 100) {
    modalContent.style.width = '300px';
    modalContent.style.height = '202px';
  } else
  if (formTextarea.value.length > 101 && formTextarea.value.length <= 401) {
    modalContent.style.width = '410px';
    modalContent.style.height = '300px';
  } else

  if (formTextarea.value.length >= 402 && formTextarea.value.length < 601) {
    // modalDesc.style.height = 'auto';

    modalContent.style.width = '440px';
    modalContent.style.height = '370px';
  } else

  if (formTextarea.value.length >= 601) {
    modalDesc.style.height = '70%';
    modalContent.style.width = '520px';
    modalContent.style.height = '450px';
  }
})