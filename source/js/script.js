var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var buttonBefore = document.querySelector(".example__button--before");
var buttonAfter = document.querySelector(".example__button--after");
var slider = document.querySelector(".example__bar-toggle");
var imageBefore = document.querySelector(".example__image--before");
var imageAfter = document.querySelector(".example__image--after");

var modal = document.querySelector(".modal");
var buttonCart = document.querySelectorAll(".js-button-cart");
var buttonAdd = document.querySelector(".modal__button");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (buttonBefore) {
  buttonBefore.addEventListener("click", function () {
    slider.classList.remove("example__bar-toggle--after");
    slider.classList.add("example__bar-toggle--before");
    imageAfter.classList.add("example__hidden");
    imageBefore.classList.remove("example__hidden");
    imageBefore.classList.add("example__no-clip-before");
    imageAfter.classList.remove("example__no-clip-after");
    imageBefore.classList.remove("example__hidden-tablet");
    imageAfter.classList.add("example__hidden-tablet");
  });
}


if (buttonAfter) {
  buttonAfter.addEventListener("click", function () {
    slider.classList.add("example__bar-toggle--after");
    slider.classList.remove("example__bar-toggle--before");
    imageBefore.classList.add("example__hidden");
    imageAfter.classList.remove("example__hidden");
    imageAfter.classList.add("example__no-clip-after");
    imageBefore.classList.add("example__no-clip-before");
    imageAfter.classList.remove("example__hidden-tablet");
    imageBefore.classList.add("example__hidden-tablet");
  });
}

if (buttonCart) {
  for (var i = 0; i < buttonCart.length; i++) {
    buttonCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--js-show");
    })
  }
};

if (buttonAdd) {
  buttonAdd.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--js-show");
  })
};
