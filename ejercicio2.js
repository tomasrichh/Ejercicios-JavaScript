var peliculas = ["Shrek", "Interestelar", "Barbie", "El Conjuro", "Superbad", "It"];
var generos = ["comedia", "ciencia ficcion", "comedia", "terror", "comedia", "terror"];

function recomendar(genero) {
  var opciones = [];
  for (var i = 0; i < generos.length; i++) {
    if (generos[i] === genero) {
      opciones.push(peliculas[i]);
    }
  }
  var azar = Math.floor(Math.random() * opciones.length);
  document.getElementById("resultado").innerText = "Te recomendamos: " + opciones[azar];
}
