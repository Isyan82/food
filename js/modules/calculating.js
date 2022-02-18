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



export default calculating;