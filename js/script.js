//button-up
var btn = $('#button');
$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});
btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '400');
});

//button-up

//button-up2
$(function() {
	// при нажатии на кнопку scrollup
	$('.scrollup').click(function() {
	  // переместиться в верхнюю часть страницы
	$("html, body").animate({
		scrollTop:0
	},1000);
	})
})
	// при прокрутке окна (window)
	$(window).scroll(function() {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop()>200) {
		// то сделать кнопку scrollup видимой
		$('.scrollup').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.scrollup').fadeOut();
	}
	});
//button-up2

//slick
$(document).ready(function () {
	$('.second__items').slick({
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.four_items').slick({
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.team__items').slick({
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 735,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 554,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
//slick

// Инициализируем Swiper
// let myImageSlider = new Swiper('.reviews__slider', {
// 	// Стрелки
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	// Навигация 
// 	// Буллеты, текущее положение, прогрессбар
// 	pagination: {
// 		el: '.swiper-pagination',
// 		// Буллеты
// 		type: 'bullets',
// 		clickable: true,
// 		// Динамические буллеты
// 		dynamicBullets: true,
// 		// Кастомные буллеты
// 		renderBullet: function (index, className) {
// 			return '<span class="' + className + '">' + (index + 1) + '</span>';
// 		},
// 		/*
// 		// Фракция
// 		type: 'fraction',
// 		// Кастомный вывод фракции
// 		renderFraction: function (currentClass, totalClass) {
// 			return 'Фото <span class="' + currentClass + '"></span>' +
// 				' из ' +
// 				'<span class="' + totalClass + '"></span>';
// 		},
// 		*/
// 		// Прогрессбар
// 		//type: 'progressbar'
// 	},
// 	// Скролл
// 	/*
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 		// Возможность перетаскивать скролл
// 		draggable: true
// 	},
// 	*/

// 	// Включение/отключение
// 	// перетаскивания на ПК
// 	simulateTouch: true,
// 	// Чувствительность свайпа
// 	touchRatio: 1,
// 	// Угол срабатывания свайпа/перетаскивания
// 	touchAngle: 45,
// 	// Курсор перетаскивания
// 	grabCursor: true,

// 	// Переключение при клике на слайд
// 	slideToClickedSlide: false,

// 	// Навигация по хешу
// 	hashNavigation: {
// 		// Отслеживать состояние
// 		watchState: true,
// 	},

// 	// Управление клавиатурой
// 	keyboard: {
// 		// Включить\выключить
// 		enabled: true,
// 		// Включить\выключить
// 		// только когда слайдер
// 		// в пределах вьюпорта
// 		onlyInViewport: true,
// 		// Включить\выключить
// 		// управление клавишами
// 		// pageUp, pageDown
// 		pageUpDown: true,
// 	},

// 	// Управление колесом мыши
// 	mousewheel: {
// 		// Чувствительность колеса мыши
// 		sensitivity: 1,
// 		// Класс объекта на котором
// 		// будет срабатывать прокрутка мышью.
// 		//eventsTarget: ".image-slider"
// 	},

// 	// Автовысота
// 	autoHeight: false,

// 	// Количество слайдов для показа
// 	slidesPerView: 3,

// 	// Отключение функционала
// 	// если слайдов меньше чем нужно
// 	watchOverflow: true,

// 	// Отступ между слайдами
// 	spaceBetween: 30,

// 	// Количество пролистываемых слайдов
// 	slidesPerGroup: 1,

// 	// Активный слайд по центру
// 	centeredSlides: false,

// 	// Стартовый слайд.
// 	initialSlide: 0,

// 	// Мультирядность
// 	slidesPerColumn: 1,

// 	// Бесконечный слайдер
// 	loop: false,

// 	// Кол-во дублирующих слайдов
// 	loopedSlides: 0,

// 	// Свободный режим
// 	freeMode: true,

// 	// Автопрокрутка
// 	/*
// 	autoplay: {
// 		// Пауза между прокруткой
// 		delay: 1000,
// 		// Закончить на последнем слайде
// 		stopOnLastSlide: true,
// 		// Отключить после ручного переключения
// 		disableOnInteraction: false
// 	},
// 	*/

// 	// Скорость
// 	speed: 800,

// 	// Вертикальный слайдер
// 	direction: 'horizontal',


// 	// Эффекты переключения слайдов.
// 	// Листание
// 	// effect: 'slide',

// 	/*
// 	// Эффекты переключения слайдов.
// 	// Cмена прозрачности
// 	effect: 'fade',

// 	// Дополнение к fade
// 	fadeEffect: {
// 		// Параллельная
// 		// смена прозрачности
// 		crossFade: true
// 	},
// 	*/
// 	/*
// 	// Эффекты переключения слайдов.
// 	// Переворот
// 	effect: 'flip',

// 	// Дополнение к flip
// 	flipEffect: {
// 		// Тень
// 		slideShadows: true,
// 		// Показ только активного слайда
// 		limitRotation: true
// 	},
// 	*/
// 	/*
// 	// Эффекты переключения слайдов.
// 	// Куб
// 	effect: 'cube',

// 	// Дополнение к cube
// 	cubeEffect: {
// 		// Настройки тени
// 		slideShadows: true,
// 		shadow: true,
// 		shadowOffset: 20,
// 		shadowScale: 0.94
// 	},
// 	*/
// 	/*
// 	// Эффекты переключения слайдов.
// 	// Эффект потока
// 	effect: 'coverflow',

// 	// Дополнение к coverflow
// 	coverflowEffect: {
// 		// Угол
// 		rotate: 20,
// 		// Наложение
// 		stretch: 50,
// 		// Тень
// 		slideShadows: true,
// 	},
// 	*/
// 	/*
// 	// Брейк поинты (адаптив)
// 	// Ширина экрана
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 		},
// 		480: {
// 			slidesPerView: 2,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 		}
// 	},
// 	*/
// 	/*
// 	// Брейк поинты (адаптив)
// 	// Соотношение сторон
// 	breakpoints: {
// 		'@0.75': {
// 			slidesPerView: 1,
// 		},
// 		'@1.00': {
// 			slidesPerView: 2,
// 		},
// 		'@1.50': {
// 			slidesPerView: 3,
// 		}
// 	},
// 	*/

// 	// Отключить предзагрузка картинок
// 	preloadImages: false,
// 	// Lazy Loading
// 	// (подгрузка картинок)
// 	lazy: {
// 		// Подгружать на старте
// 		// переключения слайда
// 		loadOnTransitionStart: false,
// 		// Подгрузить предыдущую
// 		// и следующую картинки
// 		loadPrevNext: false,
// 	},
// 	// Слежка за видимыми слайдами
// 	watchSlidesProgress: true,
// 	// Добавление класса видимым слайдам
// 	watchSlidesVisibility: true,

// 	// Зум картинки
// 	zoom: {
// 		// Макимальное увеличение
// 		maxRatio: 5,
// 		// Минимальное увеличение
// 		minRatio: 1,
// 	},

// 	// Миниатюры (превью)
// 	/*
// 	thumbs: {
// 		// Свайпер с мениатюрами
// 		// и его настройки
// 		swiper: {
// 			el: '.image-mini-slider',
// 			slidesPerView: 5,
// 		}
// 	},
// 	*/
// 	/*
// 	// Передача управления
// 	controller: {
// 		control: myTextSlider
// 	},
// 	*/

// 	// Обновить свайпер
// 	// при изменении элементов слайдера
// 	observer: true,

// 	// Обновить свайпер
// 	// при изменении родительских
// 	// элементов слайдера
// 	observeParents: true,

// 	// Обновить свайпер
// 	// при изменении дочерних
// 	// элементов слайда
// 	observeSlideChildren: true,

// 	// Виртуальные слайды
// 	// формирование слайдера
// 	/*
// 	virtual: {
// 		slides: (function () {
// 			let slide = []
// 			for (let i = 0; i < 500; i++) {
// 				slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
// 			}
// 			return slide;
// 		}()),
// 	},
// 	*/
// 	/*
// 	// Доступность
// 	a11y: {
// 		// Включить/выключить
// 		enabled: true,
// 		// Сообщения
// 		prevSlideMessage: 'Previous slide',
// 		nextSlideMessage: 'Next slide',
// 		firstSlideMessage: 'This is the first slide',
// 		lastSlideMessage: 'This is the last slide',
// 		paginationBulletMessage: 'Go to slide {{index}}',
// 		notificationClass: 'swiper-notification',
// 		containerMessage: '',
// 		containerRoleDescriptionMessage: '',
// 		itemRoleDescriptionMessage: '',
// 		// и т.д.
// 	},
// 	*/
// 	/*
// 	// События
// 	on: {
// 		// Событие инициализации
// 		init: function () {
// 			console.log('Слайдер запущен!');
// 		},
// 		// Событие смены слайда
// 		slideChange: function () {
// 			console.log('Слайд переключен');
// 		}
// 	},
// 	*/
// });
// Инициализируем Swiper

// бургер
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//бургер

//Анимация
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//Анимация