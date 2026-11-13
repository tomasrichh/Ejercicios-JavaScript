function consultar(opcion) {
  var texto = "";
  if (opcion === "pagos") {
    texto = "Aceptamos tarjetas de credito, debito y mercado pago.";
  } else if (opcion === "envios") {
    texto = "Hacemos envios a todo el pais en 24 a 48 horas.";
  } else if (opcion === "horarios") {
    texto = "Atendemos de Lunes a Viernes de 9 a 18 hs.";
  } else if (opcion === "cambios") {
    texto = "Tenes 30 dias para realizar cambios.";
  }
  document.getElementById("respuesta").innerText = texto;
}
