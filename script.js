const boton = document.getElementById("infoBtn");
const mensaje = document.getElementById("mensaje");
const temaBtn = document.getElementById("temaBtn");

boton.addEventListener("click", function() {
    mensaje.textContent = "El jaguar tiene la mordida más poderosa entre los felinos.";
    mensaje.classList.add("mostrar");
});

temaBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
