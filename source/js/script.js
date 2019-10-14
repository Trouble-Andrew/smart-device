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

var companyText = document.querySelectorAll('.company__descr');
var text = companyText[companyText.length - 1].innerHTML;
console.log(text);
console.log(text.split(' ').splice(0, 23).join(' ') + '...');


if (screen < 1024) {
  var companyText = document.querySelectorAll('.company__descr');
  var text = companyText[companyText.length - 1].innerHTML;
  companyText[companyText.length - 1].innerHTML = text.split(' ').splice(0, 23).join(' ') + '..';
  // console.log(text.split(' ').splice(0, 23).join(' ') + '...');
}
