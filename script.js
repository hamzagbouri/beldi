const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	var navbar = document.querySelector(".navbar");
	var header = document.querySelector("header");
	var headerHeight = header.offsetHeight;

	if (window.pageYOffset > headerHeight) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});