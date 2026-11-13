var titulos = ["Lanzamiento", "Nuevo producto"];
var estados = ["publicada", "borrador"];

function mostrar() {
  var div = document.getElementById("contenedor");
  div.innerHTML = "";
  for (var i = 0; i < titulos.length; i++) {
    var p = document.createElement("p");
    p.innerText = titulos[i] + " - Estado: " + estados[i] + " ";
    var btn = document.createElement("button");
    btn.innerText = "Cambiar estado";
    btn.onclick = (function(index) {
      return function() { cambiar(index); };
    })(i);
    p.appendChild(btn);
    div.appendChild(p);
  }
}

function crear() {
  var input = document.getElementById("titulo");
  if (input.value !== "") {
    titulos.push(input.value);
    estados.push("borrador");
    input.value = "";
    mostrar();
  }
}

function cambiar(pos) {
  if (estados[pos] === "publicada") {
    estados[pos] = "borrador";
  } else {
    estados[pos] = "publicada";
  }
  mostrar();
}

mostrar();
