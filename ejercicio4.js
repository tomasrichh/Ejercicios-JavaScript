var invitados = ["Lucia", "Martina", "Sofia", "Camila", "Pedro"];
var adentro = [];
var maximo = 3;

function ingresar() {
  var nombre = document.getElementById("nombre").value;
  var msg = document.getElementById("mensaje");
  
  if (nombre === "") return;
  
  var estaInvitado = false;
  for (var i = 0; i < invitados.length; i++) {
    if (invitados[i].toLowerCase() === nombre.toLowerCase()) {
      estaInvitado = true;
    }
  }
  if (!estaInvitado) {
    msg.innerText = "No estas en la lista";
    return;
  }
  
  for (var j = 0; j < adentro.length; j++) {
    if (adentro[j].toLowerCase() === nombre.toLowerCase()) {
      msg.innerText = "Ya ingresaste";
      return;
    }
  }
  
  if (adentro.length >= maximo) {
    msg.innerText = "Capacidad llena";
    return;
  }
  
  adentro.push(nombre);
  msg.innerText = "Bienvenido " + nombre;
  
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (var k = 0; k < adentro.length; k++) {
    var li = document.createElement("li");
    li.innerText = adentro[k];
    lista.appendChild(li);
  }
}
