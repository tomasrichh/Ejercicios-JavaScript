var canciones = ["Persiana Americana", "Yellow", "Blinding Lights", "De Musica Ligera"];
var cancionActual = 0;

function mostrar() {
  var elem = document.getElementById("reproduciendo");
  if (canciones.length === 0) {
    elem.innerText = "Ninguna";
  } else {
    elem.innerText = canciones[cancionActual];
  }
  
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (var i = 0; i < canciones.length; i++) {
    var li = document.createElement("li");
    li.innerText = canciones[i];
    lista.appendChild(li);
  }
}

function siguienteCancion() {
  if (canciones.length === 0) return;
  cancionActual = (cancionActual + 1) % canciones.length;
  mostrar();
}

function agregarCancion() {
  var input = document.getElementById("nuevaCancion");
  var texto = input.value;
  if (texto !== "") {
    canciones.push(texto);
    input.value = "";
    mostrar();
  }
}

function eliminarUltima() {
  if (canciones.length > 0) {
    canciones.pop();
    if (cancionActual >= canciones.length) {
      cancionActual = 0;
    }
    mostrar();
  }
}

mostrar();
