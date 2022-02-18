
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

export default slider;