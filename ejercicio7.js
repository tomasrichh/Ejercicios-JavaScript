var inventario = ["linterna"];
var disponibles = ["llave", "mapa", "pocion", "espada"];

function mostrar() {
  var mochila = document.getElementById("mochila");
  mochila.innerHTML = "";
  for (var i = 0; i < inventario.length; i++) {
    var li = document.createElement("li");
    li.innerText = inventario[i] + " ";
    var btn = document.createElement("button");
    btn.innerText = "Tirar";
    btn.onclick = (function(index) {
      return function() { tirar(index); };
    })(i);
    li.appendChild(btn);
    mochila.appendChild(li);
  }

  var suelo = document.getElementById("suelo");
  suelo.innerHTML = "";
  for (var j = 0; j < disponibles.length; j++) {
    var li2 = document.createElement("li");
    li2.innerText = disponibles[j] + " ";
    var btn2 = document.createElement("button");
    btn2.innerText = "Agarra";
    btn2.onclick = (function(index) {
      return function() { agarrar(index); };
    })(j);
    li2.appendChild(btn2);
    suelo.appendChild(li2);
  }
}

function agarrar(pos) {
  if (inventario.length < 4) {
    var elem = disponibles.splice(pos, 1)[0];
    inventario.push(elem);
    mostrar();
  }
}

function tirar(pos) {
  var elem = inventario.splice(pos, 1)[0];
  disponibles.push(elem);
  mostrar();
}

mostrar();
