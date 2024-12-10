const scrollUpButton = document.getElementById("scrollUp");
const scrollDownButton = document.getElementById("scrollDown");

scrollUpButton.addEventListener("click", () => {
    slider.scrollBy({ top: -150, behavior: "smooth" });
});

scrollDownButton.addEventListener("click", () => {
    slider.scrollBy({ top: 150, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
	// Variables
	const elements = document.querySelectorAll(".scroll-effect");
	const cards = document.querySelectorAll('.swiper-slide');
	const sectionGalleryTitle = document.querySelector(".section-galeria__content");

	// Evento de scroll
	window.addEventListener("scroll", () => {
		const currentScroll = window.scrollY;

		// Mostrar u ocultar los elementos con .scroll-effect
		if (currentScroll > 100) {
			elements.forEach(el => el.classList.add("hidden"));
		} else {
			elements.forEach(el => el.classList.remove("hidden"));
		}

	});
	
});


