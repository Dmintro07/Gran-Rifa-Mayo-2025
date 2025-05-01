
const form = document.getElementById("formulario");
const mensajeError = document.getElementById("mensajeError");
const timer = document.getElementById("timer");
const deadline = new Date("2025-05-25T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) {
    timer.innerHTML = "¡El sorteo ha comenzado!";
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  timer.textContent = `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  mensajeError.textContent = "";

  const nombre = document.getElementById("nombre").value;
  const numero = document.getElementById("numero").value;
  const telefono = document.getElementById("telefono").value;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwtdpXf7bD94sug4iUx20ZySOzkTsJlFx2wnGnGcqa9R3OCCi4TYoYNztjR1-mJ-7OR/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, numero, telefono })
    });
    const result = await response.json();
    if (result.success) {
      alert("¡Número reservado con éxito!");
      form.reset();
    } else {
      mensajeError.textContent = result.message || "Error. Intenta con otro número.";
    }
  } catch (error) {
    mensajeError.textContent = "Error al enviar. Intenta más tarde.";
  }
});
