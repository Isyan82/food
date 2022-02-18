import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calculating from './modules/calculating';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2022-05-11');
	cards();
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		prevArrow: '.offer__slider-prev',
		nextArrow: '.offer__slider-next',
		currentCounter: '#current',
		totalCounter: '#total',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slide-inner'

	});
	calculating();
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






