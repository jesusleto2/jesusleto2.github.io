document.addEventListener("DOMContentLoaded", () => {
    const sectionGaleria = document.querySelector(".section-galeria");
    const galeriaItems = document.querySelectorAll(".photo-item");
    const tituloGaleria = document.querySelector(".section-galeria__text");

    let animacionActivada = false;

    const activarAnimacion = () => {
        if (animacionActivada) return;

        const sectionTop = sectionGaleria.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            animacionActivada = true;

            // Animación para los ítems de la galería
            galeriaItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 100); // Efecto tipo "Pinterest"
            });

            // Animación para el título
            tituloGaleria.style.opacity = "1";
            tituloGaleria.style.transform = "translateY(0)";
        }
    };

    // Inicializar animaciones
    tituloGaleria.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    tituloGaleria.style.opacity = "0";
    tituloGaleria.style.transform = "translateY(-20px)";

    window.addEventListener("scroll", activarAnimacion);
});
