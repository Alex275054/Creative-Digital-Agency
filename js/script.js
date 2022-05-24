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


//slider
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

// бургер
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});