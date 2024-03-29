// Seleccionar los elementos del DOM
const boton =  document.querySelector('button');
const color = document.getElementById('color');

//Definir una funcion
function generarColorHexAleatorio(){
  let digitos = '0123456789ABCDEF';  //cadena de caracteres con todos los digitos posibles
  let colorHex ='#';

/*Se multiplica por 16 por que hay 16 caracteres posible
, y como Math.random va desde 0 -1 nunca va a ser uno asi
que nunca va a ser 16 , su valor final sera indice 0 - 15 ,    
El siclo for va a tener 6 iteraciones para generar 
los 6 numeros aleatorios*/

  for (let i = 0; i< 6; i++) {
    let indiceAleatorio = Math.floor(Math.random()*16);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
}

//Asociamos la funcion  al evento click

boton.addEventListener('click', function(){
  let colorAleatorio = generarColorHexAleatorio();
  //Actualizar el texto
  color.textContent = colorAleatorio;
  //Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});