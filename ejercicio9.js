var fichas = 10;

function jugar() {
  var apuesta = parseInt(document.getElementById("apuesta").value);
  var tipo = document.getElementById("tipo").value;
  var res = document.getElementById("resultado");
  
  if (apuesta > fichas || apuesta <= 0) return;
  
  var numero = Math.floor(Math.random() * 11);
  var gano = false;
  
  if (tipo === "par" && numero % 2 === 0 && numero !== 0) {
    gano = true;
  } else if (tipo === "impar" && numero % 2 !== 0) {
    gano = true;
  }
  
  if (gano) {
    fichas += apuesta;
    res.innerText = "Salio el " + numero + ". Ganaste!";
  } else {
    fichas -= apuesta;
    res.innerText = "Salio el " + numero + ". Perdiste.";
  }
  
  document.getElementById("fichas").innerText = fichas;
}
