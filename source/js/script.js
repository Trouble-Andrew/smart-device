'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

var screen = document.body.clientWidth;
var sectionsButton = document.querySelector('#sections');
var sectionsList = document.querySelector('.sections__list');
var locationButton = document.querySelector('#location');
var locationList = document.querySelector('.location__list');


if (screen < 768) {
  sectionsButton.addEventListener('click', function () {
    if (sectionsList.classList.contains('visually-hidden')) {
      sectionsList.classList.remove('visually-hidden');
      sectionsButton.classList.remove('footer__title--plus');
      sectionsButton.classList.add('footer__title--minus');
    } else {
      sectionsList.classList.add('visually-hidden');
      sectionsButton.classList.add('footer__title--plus');
      sectionsButton.classList.remove('footer__title--minus');
    }
  });

  locationButton.addEventListener('click', function () {
    if (locationList.classList.contains('visually-hidden')) {
      locationList.classList.remove('visually-hidden');
      locationButton.classList.remove('footer__title--plus');
      locationButton.classList.add('footer__title--minus');
    } else {
      locationList.classList.add('visually-hidden');
      locationButton.classList.add('footer__title--plus');
      locationButton.classList.remove('footer__title--minus');
    }
  });
}

if (screen > 1024) {
  var callButton = document.querySelector('.main-nav__btn');
  var popup = document.querySelector('.modal-form');
  var overlay = document.querySelector('.overlay');


  if (callButton) {
    callButton.addEventListener('click', function (evt) {
      if (popup) {
        evt.preventDefault();
        popup.classList.add('modal--show');
        overlay.classList.add('modal--show');
      }
    });
  }

  var addOrderBtn = function () {
    if (popup) {
      var i;
      var callBtn = document.querySelector('.main-nav__btn');
      for (i = 0; i < callBtn.length; i++) {
        callBtn[i].addEventListener('click', function (evt) {
          evt.preventDefault();
          popup.classList.add('modal--show');
          overlay.classList.add('modal--show');
        });
      }
    }
  };

  addOrderBtn();

  overlay.addEventListener('click', function (evt) {
    if (popup) {
      evt.preventDefault();
      popup.classList.remove('modal--show');
      overlay.classList.remove('modal--show');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (popup) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains('modal--show')) {
          evt.preventDefault();
          popup.classList.remove('modal--show');
          overlay.classList.remove('modal--show');
        } else if (popup.classList.contains('modal--show')) {
          evt.preventDefault();
          popup.classList.remove('modal--show');
          overlay.classList.remove('modal--show');
        }
      }
    }
  });
}

if (screen < 1024) {
  var companyText = document.querySelectorAll('.company__descr');
  var text = companyText[companyText.length - 1].innerHTML;
  companyText[companyText.length - 1].innerHTML = text.split(' ').splice(0, 23).join(' ') + '..';
}
