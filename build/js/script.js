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

var sectionsButton = document.querySelector('#sections');
var sectionsList = document.querySelector('.sections__list');
var locationButton = document.querySelector('#location');
var locationList = document.querySelector('.location__list');

var textChecker = function () {
  var screenSize = document.body.clientWidth;
  if (screenSize < 1024) {
    var companyText = document.querySelectorAll('.company__descr');
    var text = companyText[companyText.length - 1].innerHTML;
    companyText[companyText.length - 1].innerHTML = text.split(' ').splice(0, 23).join(' ') + '..';
  }
};

var addEvent = function (object, type, callback) {
  if (object === null || typeof (object) === 'undefined') {
    return;
  }
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent('on' + type, callback);
  } else {
    object['on' + type] = callback;
  }
};

var onSectionClick = function () {
  if (sectionsList.classList.contains('visually-hidden')) {
    sectionsList.classList.remove('visually-hidden');
    sectionsButton.classList.remove('footer__title--plus');
    sectionsButton.classList.add('footer__title--minus');
  } else {
    sectionsList.classList.add('visually-hidden');
    sectionsButton.classList.add('footer__title--plus');
    sectionsButton.classList.remove('footer__title--minus');
  }
};

var onlocationClick = function () {
  if (locationList.classList.contains('visually-hidden')) {
    locationList.classList.remove('visually-hidden');
    locationButton.classList.remove('footer__title--plus');
    locationButton.classList.add('footer__title--minus');
  } else {
    locationList.classList.add('visually-hidden');
    locationButton.classList.add('footer__title--plus');
    locationButton.classList.remove('footer__title--minus');
  }
};

var setAccordion = function () {
  var screenSize = document.body.clientWidth;
  sectionsButton.removeEventListener('click', onSectionClick);
  locationButton.removeEventListener('click', onlocationClick);
  sectionsList.classList.remove('visually-hidden');
  locationList.classList.remove('visually-hidden');
  if (screenSize < 768) {
    sectionsButton.addEventListener('click', onSectionClick);
    locationButton.addEventListener('click', onlocationClick);
  }
};

var openModal = function () {
  var screenSize = document.body.clientWidth;
  if (screenSize > 1024) {
    var callButton = document.querySelector('.main-nav__btn');
    var popup = document.querySelector('.modal-form');
    var overlay = document.querySelector('.overlay');

    if (callButton) {
      callButton.addEventListener('click', function (evt) {
        if (popup) {
          evt.preventDefault();
          document.getElementsByTagName('body')[0].style.overflow = 'hidden';
          popup.classList.add('modal--show');
          overlay.classList.add('modal--show');
        }
      });
    }

    var addOrderBtn = function () {
      if (popup) {
        var callBtn = document.querySelector('.main-nav__btn');
        callBtn.addEventListener('click', function (evt) {
          evt.preventDefault();
          popup.classList.add('modal--show');
          overlay.classList.add('modal--show');
          addCloseBtn();
        });
      }
    };

    var addCloseBtn = function () {
      if (popup) {
        var closelBtn = document.querySelector('.modal-form__closeBtn');
        closelBtn.addEventListener('click', function (evt) {
          evt.preventDefault();
          document.getElementsByTagName('body')[0].style.overflow = 'scroll';
          popup.classList.remove('modal--show');
          overlay.classList.remove('modal--show');
        });
      }
    };

    addOrderBtn();

    overlay.addEventListener('click', function (evt) {
      if (popup) {
        evt.preventDefault();
        document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        popup.classList.remove('modal--show');
        overlay.classList.remove('modal--show');
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (popup) {
        if (evt.keyCode === 27) {
          document.getElementsByTagName('body')[0].style.overflow = 'scroll';
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
};

var increaseSectionWidth = function () {
  var screenSize = document.body.clientWidth;
  var sectionsListLitems = document.querySelectorAll('.sections__item');
  var sectionColumn2 = document.querySelector('.footer__col--2');
  if (screenSize >= 1024 && sectionsListLitems.length > 8) {
    sectionColumn2.style.width = '70%';
  } else {
    sectionColumn2.style.width = '48%';
  }
  if (screenSize < 768) {
    sectionColumn2.style.width = '100%';
  }
};

var increaseSectionHeight = function () {
  var screenSize = document.body.clientWidth;
  var sectionsListLitems = document.querySelectorAll('.sections__item');
  if (screenSize >= 1024 && sectionsListLitems.length > 8) {
    sectionsListLitems.forEach(function (element) {
      element.style.marginLeft = '0';
    });
    sectionsList.style.height = '330px';
  }
};

addEvent(window, 'resize', function () {
  setAccordion();
  openModal();
  increaseSectionWidth();
  increaseSectionHeight();
});

setAccordion();
openModal();
textChecker();
increaseSectionWidth();
increaseSectionHeight();

var phoneInput = document.querySelector('#phone');
var modalphoneInput = document.querySelector('#modal-phone');

var getPhoneMask = function (event) {
  if (!(event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Tab')) {
    event.preventDefault();
  }
  var mask = '+7 (111) 111-11-11';

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    var currentString = event.target.value;
    var currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] === '1') {
        event.target.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] === '1') {
            event.target.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
};

phoneInput.addEventListener('keydown', getPhoneMask);
modalphoneInput.addEventListener('keydown', getPhoneMask);
