var touchHover = function () {
	$('[data-hover]').click(function (e) {
		e.preventDefault();
		var $this = $(this);
		var onHover = $this.attr('data-hover');
		var linkHref = $this.attr('href');
		if (linkHref && $this.hasClass(onHover)) {
			location.href = linkHref;
			return false;
		}
		$this.toggleClass(onHover);
	});
};

$(document).ready(function () {
	touchHover();
});

var menuButton = document.querySelector('.menu-burger');
menuButton.addEventListener('click', function () {
	document.querySelector('.menu-top').classList.toggle('menu-top--visible'),
		document.querySelector('.menu-burger').classList.toggle('menu-burger--active')
});