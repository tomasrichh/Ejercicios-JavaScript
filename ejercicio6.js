var energia = 3;
var hambre = 1;
var felicidad = 1;

function mostrar() {
  document.getElementById("energia").innerText = energia;
  document.getElementById("hambre").innerText = hambre;
  document.getElementById("felicidad").innerText = felicidad;
}

function alimentar() {
  if (hambre > 0) {
    hambre--;
    mostrar();
  }
}

function jugar() {
  if (energia > 0 && hambre < 3) {
    felicidad++;
    energia--;
    hambre++;
    mostrar();
  }
}

function dormir() {
  energia = 3;
  mostrar();
}

mostrar();
