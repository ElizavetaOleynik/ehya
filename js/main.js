$(document).ready(function () {
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	let body = document.querySelector('body'); //1 создали переменную для body, чтобы присвоить класс touch на мобилках 
	if (isMobile.any()) { //2 проверяем что это мобилка 
		body.classList.add('touch'); //3 присвоили body класс touch на мобилках
		let arrow = document.querySelectorAll('.arrow'); //4 всем объектам с классом arrow нужно ....
		for (i = 0; i < arrow.length; i++) { //4 цикл for чтобы работало даже в эксплорере
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			arrow[i].addEventListener('click', function () {

				const parent = $(this).parent();
				parent.toggleClass('item--active');

				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');

			});

			$('.sub-menu__arrow').click(function () {
				const parent = $(this).parent();
				parent.toggleClass('sub-menu__item--active');
			});

		}
	} else {
		body.classList.add('mouse'); //3 если не мобилка, то присвоим класс mouse 
	};



	let menuBurger = document.querySelector('.menu-burger');
	menuBurger.addEventListener('click', function () {
		document.querySelector('.menu__list').classList.toggle('menu__list--visible'),
			document.querySelector('.menu-burger').classList.toggle('menu-burger--active'),
			$('body').toggleClass('lock')
	});


	$('.btn').click(function (e) {
		e.preventDefault();
		$('.code-block__text').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block' + num).toggleClass('active'),
			$(".btn").removeClass('active'),
			$('.btn' + num).toggleClass('active')
	});



	$('.accordion-item__trigger').click(function () {
		const parent = $(this).parent();

		if (parent.hasClass('accordion-item--active')) {
			parent.removeClass('accordion-item--active')
		} else {
			$('.accordion-item').removeClass('accordion-item--active')
			parent.addClass('accordion-item--active')
		}
	});

	$('.accordion-pricing__trigger').click(function () {
		const parent = $(this).parent();
		if (parent.hasClass('accordion-pricing__item--active')) {
			parent.removeClass('accordion-pricing__item--active')
		} else {
			$('.accordion-pricing__item').removeClass('accordion-pricing__item--active')
			parent.addClass('accordion-pricing__item--active')
		}
	});

	$('.switch__input').click(function () {
		$('.pricing-card__cost_1').toggleClass('pricing-card__cost_1--hidden')
		$('.pricing-card__cost_2').toggleClass('pricing-card__cost_2--visible')
	});

	$('.menu-burger').click(function () {
		if ($(this).hasClass('menu-burger--active')) {
			$('.menu__item').removeClass('item--active')
			$('.sub-menu__item').removeClass('item--active')
			$('.sub-menu__item').removeClass('sub-menu__item--active')
			$('.sub-menu__arrow').removeClass('active')
			$('.menu__arrow').removeClass('active')
			$('.sub-menu').removeClass('open')
			$('.sub-sub-menu').removeClass('open')
		}
	});

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	});

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);


	function openModal() {
		event.preventDefault();
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
	};

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	};


	$(window).keydown(function (e) {
		// ESCAPE key pressed
		if (e.keyCode == 27) {
			event.preventDefault();
			var modalOverlay = $('.modal__overlay');
			var modalDialog = $('.modal__dialog');
			modalOverlay.removeClass('modal__overlay--visible');
			modalDialog.removeClass('modal__dialog--visible');
		}
	});

	//обработка формы
	$('.modal__form').validate({
		messages: {
			name: "Please enter your name",
			email: {
				required: "Please enter your email",
				email: "Your email address must be in the format of name@domain.com"
			},
			password: "Please enter password"
		},


		errorPlacement: function (error, element) {
			if (element.attr("name") == "testCheckbox") {
				//Здесь пиши любые операции если чекбокс не отмечен
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
			return true;
		},
		ignore: ":disabled",
		rules: {
			testCheckbox: {
				required: true
			},
			title: {
				required: true
			}
		},
		messages: {
			testCheckbox: {
				required: "Check it to register"
			}
		}
	});


});