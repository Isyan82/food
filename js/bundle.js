/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calculating.js":
/*!***********************************!*\
  !*** ./js/modules/calculating.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculating() {
	const calculating = document.querySelector('.calculating');
	let result = calculating.querySelector('.calculating__result span');

	let sex, height, weight, age, ratio;

	if (localStorage.getItem('sex')) {
		sex = localStorage.getItem('sex');
	} else {
		sex = 'female';
		localStorage.setItem('sex', 'female');
	}

	if (localStorage.getItem('ratio')) {
		ratio = localStorage.getItem('ratio');
	} else {
		ratio = 'female';
		localStorage.setItem('ratio', 1.375);

	}

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(item => {
			item.classList.remove(activeClass);
			if (item.getAttribute('id') === localStorage.getItem('sex')) {
				item.classList.add(activeClass);
			}
			if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				item.classList.add(activeClass);
			}
		});
	}

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) {
			result.textContent = '____';
			return;
		}
		if (sex == 'female') {
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}

	calcTotal();

	function getStaticInformation(selector, activeClass) {
		const elements = calculating.querySelectorAll(selector);

		elements.forEach(item => {
			item.addEventListener('click', (evt) => {
				if (evt.target.getAttribute('data-ratio')) {
					ratio = +evt.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', evt.target.getAttribute('data-ratio'));
				} else {
					sex = evt.target.getAttribute('id');
					localStorage.setItem('sex', evt.target.getAttribute('id'));
				}

				elements.forEach(item => {
					item.classList.remove(activeClass);
				});

				evt.target.classList.add(activeClass);

				calcTotal();
			});

		});
	}

	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	function getDinamicInformation(selector) {
		const input = calculating.querySelector(selector);
		input.addEventListener('input', () => {
			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid tomato';
			} else {
				input.style.border = 'none';

			}
			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}
			calcTotal();
		});

	}
	getDinamicInformation('#height');
	getDinamicInformation('#weight');
	getDinamicInformation('#age');
}



/* harmony default export */ __webpack_exports__["default"] = (calculating);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
	const transfer = 27.3;

	function changeToRUB(usd) {
		let price;
		price = (usd * transfer).toFixed(1);
		return price;
	}



	Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
		.then(data => createCard(data));
	function createCard(data) {
		data.forEach(({ img, altimg, title, descr, price }) => {
			const element = document.createElement('div');
			element.classList.add('menu__item');

			element.innerHTML = `
					<img src=${img} alt=${altimg}>
					<h3 class="menu__item-subtitle">${title}</h3>
					<div class="menu__item-descr">${descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${changeToRUB(price)}</span> руб./день</div>
					</div>
				`;

			document.querySelector('.menu .container').append(element);
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
	const forms = document.querySelectorAll(formSelector);
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});



	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
				`;
			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));


			Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				});
		});

	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		prevModalDialog.classList.remove('show');
		Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
		<div class="modal__content">
		    <div class="modal__close" data-close>×</div>
		    <div class="modal__title">${message}</div>
		</div>
	    `;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
		}, 4000);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector);

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});



	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == "") {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});



	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

}

/* harmony default export */ __webpack_exports__["default"] = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

function slider({ container, slide, prevArrow, nextArrow, currentCounter, totalCounter, wrapper, field }) {
	const offer = document.querySelector('.offer'),

		slider = offer.querySelector(container),
		slides = offer.querySelectorAll(slide),
		prev = offer.querySelector(prevArrow),
		next = offer.querySelector(nextArrow),
		current = offer.querySelector(currentCounter),
		total = offer.querySelector(totalCounter),
		slidesWrapper = offer.querySelector(wrapper),
		slidesField = offer.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	// логика цифр total
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
	} else {
		total.textContent = slides.length;
	}

	// логика цифр current
	function addZero() {
		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	}
	addZero();

	function createActiveDot() {
		dots.forEach(item => item.style.opacity = ".5");
		dots[slideIndex - 1].style.opacity = 1;
	}

	function moveSlide() {
		slidesField.style.transform = `translateX(-${offset}px)`;
	}


	// стили
	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';
	slider.style.position = 'relative';
	slides.forEach(item => {
		item.style.width = width;
	});


	// создание DOTS
	const indicators = document.createElement('ol'),
		dots = [];
	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	// function deleteNotDigits(str) {
	// 	return +str.replace(/\D/g, '');
	// }

	// событие NEXT
	next.addEventListener('click', () => {
		if (offset === (+width.slice(0, width.length - 2) * (slides.length - 1))) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}

		moveSlide();

		if (slideIndex === slides.length) {
			slideIndex = 1;
		} else {
			slideIndex += 1;
		}

		addZero();
		createActiveDot();
	});


	// событие PREV
	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}

		moveSlide();

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		addZero();
		createActiveDot();
	});

	// событие DOTS
	dots.forEach(item => {
		item.addEventListener('click', (evt) => {
			const slideTo = evt.target.getAttribute('data-slide-to');

			slideIndex = parseInt(slideTo);
			offset = +width.slice(0, width.length - 2) * (slideTo - 1);

			moveSlide();
			addZero();
			createActiveDot();
		});
	});

}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

	let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {

		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();


	tabsParent.addEventListener('click', function (event) {
		const target = event.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calculating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculating */ "./js/modules/calculating.js");









window.addEventListener('DOMContentLoaded', function () {

	const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal', modalTimerId), 300000);

	Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
	Object(_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2022-05-11');
	Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
	Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
		container: '.offer__slider',
		slide: '.offer__slide',
		prevArrow: '.offer__slider-prev',
		nextArrow: '.offer__slider-next',
		currentCounter: '#current',
		totalCounter: '#total',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slide-inner'

	});
	Object(_modules_calculating__WEBPACK_IMPORTED_MODULE_6__["default"])();
});



	// // Tabs

	// let tabs = document.querySelectorAll('.tabheader__item'),
	// 	tabsContent = document.querySelectorAll('.tabcontent'),
	// 	tabsParent = document.querySelector('.tabheader__items');

	// function hideTabContent() {

	// 	tabsContent.forEach(item => {
	// 		item.classList.add('hide');
	// 		item.classList.remove('show', 'fade');
	// 	});

	// 	tabs.forEach(item => {
	// 		item.classList.remove('tabheader__item_active');
	// 	});
	// }

	// function showTabContent(i = 0) {
	// 	tabsContent[i].classList.add('show', 'fade');
	// 	tabsContent[i].classList.remove('hide');
	// 	tabs[i].classList.add('tabheader__item_active');
	// }

	// hideTabContent();
	// showTabContent();


	// tabsParent.addEventListener('click', function (event) {
	// 	const target = event.target;
	// 	if (target && target.classList.contains('tabheader__item')) {
	// 		tabs.forEach((item, i) => {
	// 			if (target == item) {
	// 				hideTabContent();
	// 				showTabContent(i);
	// 			}
	// 		});
	// 	}
	// });

	// Timer


	// const deadline = '2022-05-11';

	// function getTimeRemaining(endtime) {
	// 	const t = Date.parse(endtime) - Date.parse(new Date()),
	// 		days = Math.floor((t / (1000 * 60 * 60 * 24))),
	// 		seconds = Math.floor((t / 1000) % 60),
	// 		minutes = Math.floor((t / 1000 / 60) % 60),
	// 		hours = Math.floor((t / (1000 * 60 * 60) % 24));

	// 	return {
	// 		'total': t,
	// 		'days': days,
	// 		'hours': hours,
	// 		'minutes': minutes,
	// 		'seconds': seconds
	// 	};
	// }

	// function getZero(num) {
	// 	if (num >= 0 && num < 10) {
	// 		return '0' + num;
	// 	} else {
	// 		return num;
	// 	}
	// }

	// function setClock(selector, endtime) {

	// 	const timer = document.querySelector(selector),
	// 		days = timer.querySelector("#days"),
	// 		hours = timer.querySelector('#hours'),
	// 		minutes = timer.querySelector('#minutes'),
	// 		seconds = timer.querySelector('#seconds'),
	// 		timeInterval = setInterval(updateClock, 1000);

	// 	updateClock();

	// 	function updateClock() {
	// 		const t = getTimeRemaining(endtime);

	// 		days.innerHTML = getZero(t.days);
	// 		hours.innerHTML = getZero(t.hours);
	// 		minutes.innerHTML = getZero(t.minutes);
	// 		seconds.innerHTML = getZero(t.seconds);

	// 		if (t.total <= 0) {
	// 			clearInterval(timeInterval);
	// 		}
	// 	}
	// }

	// setClock('.timer', deadline);



	// Modal
	// const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 	modal = document.querySelector('.modal');

	// modalTrigger.forEach(btn => {
	// 	btn.addEventListener('click', openModal);
	// });

	// function closeModal() {
	// 	modal.classList.add('hide');
	// 	modal.classList.remove('show');
	// 	document.body.style.overflow = '';
	// }

	// function openModal() {
	// 	modal.classList.add('show');
	// 	modal.classList.remove('hide');
	// 	document.body.style.overflow = 'hidden';
	// 	clearInterval(modalTimerId);
	// }

	// modal.addEventListener('click', (e) => {
	// 	if (e.target === modal || e.target.getAttribute('data-close') == "") {
	// 		closeModal();
	// 	}
	// });

	// document.addEventListener('keydown', (e) => {
	// 	if (e.code === "Escape" && modal.classList.contains('show')) {
	// 		closeModal();
	// 	}
	// });

	// const modalTimerId = setTimeout(openModal, 300000);
	// // Изменил значение, чтобы не отвлекало

	// function showModalByScroll() {
	// 	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
	// 		openModal();
	// 		window.removeEventListener('scroll', showModalByScroll);
	// 	}
	// }
	// window.addEventListener('scroll', showModalByScroll);



	// CARDS
	// const transfer = 27.3;

	// function changeToRUB(usd) {
	// 	let price;
	// 	price = (usd * transfer).toFixed(1);
	// 	return price;
	// }

	// const getResource = async (url) => {
	// 	const res = await fetch(url);

	// 	if (!res.ok) {
	// 		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	// 	}

	// 	return await res.json();
	// };



	// getResource('http://localhost:3000/menu')
	// 	.then(data => createCard(data));
	// function createCard(data) {
	// 	data.forEach(({ img, altimg, title, descr, price }) => {
	// 		const element = document.createElement('div');
	// 		element.classList.add('menu__item');

	// 		element.innerHTML = `
	// 				<img src=${img} alt=${altimg}>
	// 				<h3 class="menu__item-subtitle">${title}</h3>
	// 				<div class="menu__item-descr">${descr}</div>
	// 				<div class="menu__item-divider"></div>
	// 				<div class="menu__item-price">
	// 				<div class="menu__item-cost">Цена:</div>
	// 				<div class="menu__item-total"><span>${changeToRUB(price)}</span> руб./день</div>
	// 				</div>
	// 			`;

	// 		document.querySelector('.menu .container').append(element);
	// 	});
	// }




	// Forms

	// const forms = document.querySelectorAll('form');
	// const message = {
	// 	loading: 'img/form/spinner.svg',
	// 	success: 'Спасибо! Скоро мы с вами свяжемся',
	// 	failure: 'Что-то пошло не так...'
	// };

	// forms.forEach(item => {
	// 	bindPostData(item);
	// });

	// const postData = async (url, data) => {
	// 	const res = await fetch(url, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: data
	// 	});
	// 	return await res.json();
	// };


	// function bindPostData(form) {
	// 	form.addEventListener('submit', (e) => {
	// 		e.preventDefault();

	// 		let statusMessage = document.createElement('img');
	// 		statusMessage.src = message.loading;
	// 		statusMessage.style.cssText = `
	// 			display: block;
	// 			margin: 0 auto;
	// 			`;
	// 		form.insertAdjacentElement('afterend', statusMessage);

	// 		const formData = new FormData(form);

	// 		const json = JSON.stringify(Object.fromEntries(formData.entries()));


	// 		postData('http://localhost:3000/requests', json)
	// 			.then(data => {
	// 				console.log(data);
	// 				showThanksModal(message.success);
	// 				statusMessage.remove();
	// 			}).catch(() => {
	// 				showThanksModal(message.failure);
	// 			}).finally(() => {
	// 				form.reset();
	// 			});
	// 	});

	// }

	// function showThanksModal(message) {
	// 	const prevModalDialog = document.querySelector('.modal__dialog');

	// 	prevModalDialog.classList.add('hide');
	// 	prevModalDialog.classList.remove('show');
	// 	openModal();

	// 	const thanksModal = document.createElement('div');
	// 	thanksModal.classList.add('modal__dialog');
	// 	thanksModal.innerHTML = `
	// 	<div class="modal__content">
	// 	    <div class="modal__close" data-close>×</div>
	// 	    <div class="modal__title">${message}</div>
	// 	</div>
	//     `;
	// 	document.querySelector('.modal').append(thanksModal);
	// 	setTimeout(() => {
	// 		thanksModal.remove();
	// 		prevModalDialog.classList.add('show');
	// 		prevModalDialog.classList.remove('hide');
	// 		closeModal();
	// 	}, 4000);
	// }



	// SLIDER


	// const offer = document.querySelector('.offer'),
	// 	slides = offer.querySelectorAll('.offer__slide'),
	// 	slider = offer.querySelector('.offer__slider'),
	// 	prev = offer.querySelector('.offer__slider-prev'),
	// 	next = offer.querySelector('.offer__slider-next'),
	// 	current = offer.querySelector('#current'),
	// 	total = offer.querySelector('#total'),
	// 	slidesWrapper = offer.querySelector('.offer__slider-wrapper'),
	// 	slidesField = offer.querySelector('.offer__slide-inner'),
	// 	width = window.getComputedStyle(slidesWrapper).width;

	// let slideIndex = 1;
	// let offset = 0;

	// // логика цифр total
	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`;
	// } else {
	// 	total.textContent = slides.length;
	// }

	// // логика цифр current
	// function addZero() {
	// 	if (slides.length < 10) {
	// 		current.textContent = `0${slideIndex}`;
	// 	} else {
	// 		current.textContent = slideIndex;
	// 	}
	// }
	// addZero();

	// function createActiveDot() {
	// 	dots.forEach(item => item.style.opacity = ".5");
	// 	dots[slideIndex - 1].style.opacity = 1;
	// }

	// function moveSlide() {
	// 	slidesField.style.transform = `translateX(-${offset}px)`;
	// }


	// // стили
	// slidesField.style.width = 100 * slides.length + '%';
	// slidesField.style.display = 'flex';
	// slidesField.style.transition = '0.5s all';
	// slidesWrapper.style.overflow = 'hidden';
	// slider.style.position = 'relative';
	// slides.forEach(item => {
	// 	item.style.width = width;
	// });


	// // создание DOTS
	// const indicators = document.createElement('ol'),
	// 	dots = [];
	// indicators.classList.add('carousel-indicators');
	// slider.append(indicators);

	// for (let i = 0; i < slides.length; i++) {
	// 	const dot = document.createElement('li');
	// 	dot.setAttribute('data-slide-to', i + 1);
	// 	dot.classList.add('dot');
	// 	if (i == 0) {
	// 		dot.style.opacity = 1;
	// 	}
	// 	indicators.append(dot);
	// 	dots.push(dot);
	// }

	// // function deleteNotDigits(str) {
	// // 	return +str.replace(/\D/g, '');
	// // }

	// // событие NEXT
	// next.addEventListener('click', () => {
	// 	if (offset === (+width.slice(0, width.length - 2) * (slides.length - 1))) {
	// 		offset = 0;
	// 	} else {
	// 		offset += +width.slice(0, width.length - 2);
	// 	}

	// 	moveSlide();

	// 	if (slideIndex === slides.length) {
	// 		slideIndex = 1;
	// 	} else {
	// 		slideIndex += 1;
	// 	}

	// 	addZero();
	// 	createActiveDot();
	// });


	// // событие PREV
	// prev.addEventListener('click', () => {
	// 	if (offset == 0) {
	// 		offset = width.slice(0, width.length - 2) * (slides.length - 1);
	// 	} else {
	// 		offset -= +width.slice(0, width.length - 2);
	// 	}

	// 	moveSlide();

	// 	if (slideIndex == 1) {
	// 		slideIndex = slides.length;
	// 	} else {
	// 		slideIndex--;
	// 	}

	// 	addZero();
	// 	createActiveDot();
	// });

	// // событие DOTS
	// dots.forEach(item => {
	// 	item.addEventListener('click', (evt) => {
	// 		const slideTo = evt.target.getAttribute('data-slide-to');

	// 		slideIndex = parseInt(slideTo);
	// 		offset = +width.slice(0, width.length - 2) * (slideTo - 1);

	// 		moveSlide();
	// 		addZero();
	// 		createActiveDot();
	// 	});
	// });












	// calculating

	// const calculating = document.querySelector('.calculating');
	// let result = calculating.querySelector('.calculating__result span');

	// let sex, height, weight, age, ratio;

	// if (localStorage.getItem('sex')) {
	// 	sex = localStorage.getItem('sex');
	// } else {
	// 	sex = 'female';
	// 	localStorage.setItem('sex', 'female');
	// }

	// if (localStorage.getItem('ratio')) {
	// 	ratio = localStorage.getItem('ratio');
	// } else {
	// 	ratio = 'female';
	// 	localStorage.setItem('ratio', 1.375);

	// }

	// function initLocalSettings(selector, activeClass) {
	// 	const elements = document.querySelectorAll(selector);

	// 	elements.forEach(item => {
	// 		item.classList.remove(activeClass);
	// 		if (item.getAttribute('id') === localStorage.getItem('sex')) {
	// 			item.classList.add(activeClass);
	// 		}
	// 		if (item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
	// 			item.classList.add(activeClass);
	// 			console.log(item);
	// 		}
	// 	});
	// }

	// initLocalSettings('#gender div', 'calculating__choose-item_active');
	// initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


	// function calcTotal() {
	// 	if (!sex || !height || !weight || !age || !ratio) {
	// 		result.textContent = '____';
	// 		return;
	// 	}
	// 	if (sex == 'female') {
	// 		result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
	// 	} else {
	// 		result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
	// 	}
	// }

	// calcTotal();

	// function getStaticInformation(selector, activeClass) {
	// 	const elements = calculating.querySelectorAll(selector);

	// 	elements.forEach(item => {
	// 		item.addEventListener('click', (evt) => {
	// 			if (evt.target.getAttribute('data-ratio')) {
	// 				ratio = +evt.target.getAttribute('data-ratio');
	// 				localStorage.setItem('ratio', evt.target.getAttribute('data-ratio'));
	// 			} else {
	// 				sex = evt.target.getAttribute('id');
	// 				localStorage.setItem('sex', evt.target.getAttribute('id'));
	// 			}

	// 			elements.forEach(item => {
	// 				item.classList.remove(activeClass);
	// 			});

	// 			evt.target.classList.add(activeClass);

	// 			calcTotal();
	// 		});

	// 	});
	// }

	// getStaticInformation('#gender div', 'calculating__choose-item_active');
	// getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	// function getDinamicInformation(selector) {
	// 	const input = calculating.querySelector(selector);
	// 	input.addEventListener('input', () => {
	// 		if (input.value.match(/\D/g)) {
	// 			input.style.border = '1px solid tomato';
	// 		} else {
	// 			input.style.border = 'none';

	// 		}
	// 		switch (input.getAttribute('id')) {
	// 			case 'height':
	// 				height = +input.value;
	// 				break;
	// 			case 'weight':
	// 				weight = +input.value;
	// 				break;
	// 			case 'age':
	// 				age = +input.value;
	// 				break;
	// 		}
	// 		calcTotal();
	// 	});

	// }
	// getDinamicInformation('#height');
	// getDinamicInformation('#weight');
	// getDinamicInformation('#age');








/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	});
	return await res.json();
};



const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map