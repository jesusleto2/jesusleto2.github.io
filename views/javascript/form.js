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