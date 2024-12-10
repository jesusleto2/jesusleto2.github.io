//----------Cartas-Animacion-----------------------
document.addEventListener("DOMContentLoaded", () => {
    // Función para observar elementos en el viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar la clase de animación cuando el elemento esté visible
                entry.target.classList.add("visible");
                // Dejar de observar el elemento una vez que se ha animado
                observer.unobserve(entry.target);
            }
        });
    });

    // Seleccionar las cartas y los artículos
    const cartas = document.querySelectorAll(".slider .card");
    const articulos = document.querySelectorAll("#articulos .article-card");

    // Observar cada carta
    cartas.forEach(carta => observer.observe(carta));

    // Observar cada artículo
    articulos.forEach(articulo => observer.observe(articulo));
});


function enviarFormulario(event) {
	event.preventDefault(); // Evitar el envío del formulario por defecto

	// Mostrar el overlay y el spinner
	document.getElementById("overlay").style.display = "flex"; // Mostrar el overlay

	// Ocultar el formulario
	document.getElementById("contactForm").classList.add("enviado");

	// Simulación de envío del formulario
	setTimeout(function() {
		// Después de 3 segundos, mostrar el mensaje de éxito
		document.getElementById("mensajeExito").style.display = "block";
		document.querySelector(".spinner").style.display = "none"; // Ocultar el spinner

		// Ocultar el mensaje después de 2 segundos
		setTimeout(function() {
			// Restablecer el formulario y ocultar el overlay
			document.getElementById("overlay").style.display = "none";
			document.getElementById("mensajeExito").style.display = "none";
			document.getElementById("contactForm").reset(); // Limpiar el formulario
			document.getElementById("contactForm").classList.remove("enviado"); // Volver a mostrar el formulario
		}, 2000);
	}, 3000); // Simular un retraso de 3 segundos para el envío
}

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("articulos-recientes");
  
    if (title) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("visible");
            observer.unobserve(entry.target); // Detenemos la observación después de activarse
          }
        });
      });
  
      observer.observe(title);
    }
  });