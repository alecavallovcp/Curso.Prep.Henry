// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i=0;i<array.length;i++){
    array[i]++;
    
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  cadena='';
  for(i=0;i<palabras.length;i++){
    if (i==palabras.length-1){ //SI ES LA ULTIMA PALABRA NO LE AGREGAMOS ESPACIO
    cadena=cadena+palabras[i];}else{cadena=cadena+palabras[i]+' ';}
  }
  return cadena;
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i=0;i<array.length;i++){
    if(array[i]==elemento){
      return true;
    }    
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total=0;
  for(var i=0;i<numeros.length;i++){
    total=total+numeros[i];
    console.log('i vale: '+i+'. Total vale: '+total);
  }
  return total;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  promedio=0;
  for(i=0;i<resultadosTest.length;i++){
    promedio=promedio+resultadosTest[i];
    console.log('Valor elemento: '+resultadosTest[i]+'. Suma (siendo i='+i+') es: '+promedio)
  }
  console.log('Promedio es: '+promedio/resultadosTest.length);
  return promedio/resultadosTest.length;
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max=0;
  for(i=0;i<numeros.length;i++){
    if(max<numeros[i]){
      max=numeros[i];
    }
  }
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length==0){
    console.log('Sin argumentos, devolviendo 0');
    return 0;
  }
  var x=1;
  for (var i=0;i<arguments.length;i++){
    console.log('Valor X= '+x);
    x=x*arguments[i];
    console.log('Nuevo valor con argumento ['+i+'] es: '+x);

  }
  return x;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
