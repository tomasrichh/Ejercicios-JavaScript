var claves = ["luna", "codigo", "salida"];
var sala = 0;
var intentos = 3;

function probar() {
  var input = document.getElementById("clave");
  var val = input.value;
  var msg = document.getElementById("mensaje");
  
  if (val === claves[sala]) {
    sala++;
    intentos = 3;
    input.value = "";
    if (sala >= claves.length) {
      msg.innerText = "Ganaste! Escapaste del juego.";
    } else {
      msg.innerText = "Correcto! Pasas a la siguiente sala.";
      document.getElementById("sala").innerText = "Sala " + (sala + 1);
      document.getElementById("intentos").innerText = "Intentos: 3";
    }
  } else {
    intentos--;
    document.getElementById("intentos").innerText = "Intentos: " + intentos;
    if (intentos <= 0) {
      msg.innerText = "Perdiste. Sin intentos.";
    } else {
      msg.innerText = "Incorrecto.";
    }
  }
}
