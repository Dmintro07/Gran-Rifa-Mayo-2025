
document.getElementById("rifaForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  if (!nombre || !numero || !telefono) {
    alert("Completa todos los campos.");
    return;
  }
  const mensaje = `Hola, soy ${nombre}. Quiero participar en la rifa con el número ${numero}. Mi celular es ${telefono}. Adjunto comprobante.`;
  const url = `https://wa.me/51904463970?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
