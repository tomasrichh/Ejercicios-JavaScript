var turnos = ["Martina", "Pedro", "Lucia"];

function mostrar() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (var i = 0; i < turnos.length; i++) {
    var li = document.createElement("li");
    li.innerText = turnos[i];
    lista.appendChild(li);
  }
}

function agregar() {
  var input = document.getElementById("cliente");
  if (input.value !== "") {
    turnos.push(input.value);
    input.value = "";
    mostrar();
  }
}

function atender() {
  if (turnos.length > 0) {
    var siguiente = turnos.shift();
    document.getElementById("atendiendo").innerText = siguiente;
    mostrar();
  } else {
    document.getElementById("atendiendo").innerText = "Nadie";
  }
}

function cancelar() {
  if (turnos.length > 0) {
    turnos.pop();
    mostrar();
  }
}

mostrar();
