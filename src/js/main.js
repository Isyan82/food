window.addEventListener('DOMContentLoaded', () => {
	// TABS
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');


	const hideTabContent = () => {
		tabsContent.forEach(item => {
			// item.style.display = "none";
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	};

	const showTabContent = (index = 0) => {
		// tabsContent[index].style.display = 'block';
		tabsContent[index].classList.add('show', 'fade');
		tabsContent[index].classList.remove('hide');
		tabs[index].classList.add('tabheader__item_active');
	};

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (evt) => {
		const targer = evt.target;

		if (targer && targer.classList.contains('tabheader__item')) {
			tabs.forEach((item, index) => {
				if (targer == item) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});




	//TIMER
	const deadline = '2022-05-13';

	// функция возвращает объект с временем до окончания таймера
	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	// функция добавления переднего ноля в цисла
	function getZero(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`;
		} else {
			return number;
		}
	}

	// функция вставляющая время дедлайна на страницу
	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			//настраиваем таймер
			timeInterval = setInterval(updateClock, 1000);
		//запускаем таймер, чтобы не было секундного отставания встаки чисел на страницу при загрузке страницы
		updateClock();
		function updateClock() {
			// расчет остатка времени для остановки таймера
			const t = getTimeRemaining(endtime);

			// вставка оставшегося времени на страницу
			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			seconds.textContent = getZero(t.seconds);

			// остановка таймера по истечении времени таймера
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);


	//MODAL


	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modalCloseBtn = document.querySelector('[data-close]'),
		modal = document.querySelector('.modal');


	// функция открытия модального окна
	function openModal() {
		modal.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}
	// функция закрытия модального окна
	function closeModal() {
		modal.classList.toggle('show');
		document.body.style.overflow = '';
	}

	modalTrigger.forEach(item => {
		item.addEventListener('click', openModal);
	});

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (evt) => {
		if (evt.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (evt) => {
		if (evt.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});


	const modalTimerId = setTimeout(openModal, 5000);
	function showModalBtScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalBtScroll);
		}
	}

	window.addEventListener('scroll', showModalBtScroll);
});