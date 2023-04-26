
$('#selectPersonaje, #selectTemporada').on('change', function () {
var seleccionPersonaje = $('#selectPersonaje').val();
var seleccionTemporada = $('#selectTemporada').val();
var imagen = $('#imagenPersonaje img');
// var infoPersonaje = $('#infoPersonaje'); // Pinfo del personaje

switch (seleccionPersonaje) {

case 'futurama':
imagen.attr('src', 'img/futurama.jpg');
// var descripcion = '';

break;
case 'personaje1':
switch (seleccionTemporada) {
  case 'temporada1':
    imagen.attr('src', 'img/F1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p1.html"><img src="img/F1.jpg" width="500px">';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/FryRetro.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p1.html"><img src="img/F1.jpg" width="500px">';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/FScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p1.html"><img src="img/F1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/F1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p1.html"><img src="img/F1.jpg" width="500px">';
    break;
}
break;
case 'personaje2':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/B1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p2.html"><img src="img/B1.jpg" width="500px">';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/BenRetro1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p2.html"><img src="img/B1.jpg" width="500px">';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/BScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p2.html"><img src="img/B1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/B1.jpg');
    // descripcion = '';
    break;
    }
    break;
    case 'personaje3':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/L1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p3.html"><img src="img/L1.jpg" width="500px">';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/leelaretro.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p3.html"><img src="img/L1.jpg" width="500px">';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/LScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p3.html"><img src="img/L1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/L1.jpg');
    // descripcion = '';
    break;
    }
    break;
    case 'personaje4':
    switch (seleccionTemporada) {
      case 'temporada1':
      imagen.attr('src', 'img/A1.jpg');
      document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p4.html"><img src="img/A1.jpg" width="500px">';
      break;
  case 'temporada2':
    imagen.attr('src', 'img/amyRetro.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p4.html"><img src="img/A1.jpg" width="500px">';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/AScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p4.html"><img src="img/A1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/A1.jpg');
    // descripcion = '';
    break;
    }
    break;
    case 'personaje5':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/H1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p5.html"><img src="img/H1.jpg" width="500px">';
    break;
  case 'temporada2':
    imagen.attr('src', 'img/hermesRetro.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p5.html"><img src="img/H1.jpg" width="500px">';
    break;
    case 'temporada3':
    imagen.attr('src', 'img/HScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p5.html"><img src="img/H1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/H1.jpg');
    // descripcion = '';
    break;
    }
    break;
    case 'personaje6':
    switch (seleccionTemporada) {
      case 'temporada1':
    imagen.attr('src', 'img/Z1.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p6.html"><img src="img/Z1.jpg" width="500px">';
    break;
  case 'temporada2':
  imagen.attr('src', 'img/zoidbergRetro.jpg');
  document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p6.html"><img src="img/Z1.jpg" width="500px">';
  break;
    case 'temporada3':
    imagen.attr('src', 'img/ZScooby.jpg');
    document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p6.html"><img src="img/Z1.jpg" width="500px">';
    break;
  default:
    imagen.attr('src', 'img/Z1.jpg');
    // descripcion = '';
    break;
    }
    break;
}
// $('#descripcionPersonaje').text(descripcion);
});
// $('#imagenPersonaje img').on('click', function() {
// var seleccionPersonaje = $('#selectPersonaje').val();


// switch (seleccionPersonaje) {
//   case 'personaje1':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p1.html"><img src="img/F1.jpg" width="500px">';
//     break;
//   case 'personaje2':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p2.html"><img src="img/B1.jpg" width="500px">';
//     break;
//   case 'personaje3':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p3.html"><img src="img/L1.jpg" width="500px">';
//     break;
//   case 'personaje4':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p4.html"><img src="img/A1.jpg" width="500px">';
//     break;
//   case 'personaje5':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p5.html"><img src="img/H1.jpg" width="500px">';
//     break;
//   case 'personaje6':
//     document.getElementById("imagenPersonaje").innerHTML='<a href="pages/p6.html"><img src="img/Z1.jpg" width="500px">';
//     break;
//   default:
//     descripcion = '';
//     break;
// }

// $('#descripcionPersonaje').text(descripcion);
// });

