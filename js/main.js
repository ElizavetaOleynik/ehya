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

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});

	}
} else {
	body.classList.add('mouse'); //3 если не мобилка, то присвоим класс mouse 
};

var menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', function () {
	document.querySelector('.menu__list').classList.toggle('menu__list--visible'),
		document.querySelector('.menu-burger').classList.toggle('menu-burger--active')
});