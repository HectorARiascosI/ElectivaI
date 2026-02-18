const boton = document.getElementById("infoBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "El jaguar tiene la mordida más poderosa entre los felinos.";
});
