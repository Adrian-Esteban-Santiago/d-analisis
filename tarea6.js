// Sea A un arreglo de numeros enteros A[i]. Crear una función que calcule 
//el promedio de los elementos en A
function Promedio(arr) {
    if (arr.length === 0) {
      return 0; // Si el arreglo está vacío, el promedio es 0
    }
  
    const suma = arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
  
    const promedio = suma / arr.length;
  
    return promedio;
  }
  console.log(`El promedio del arreglo [${arreglo}] es: ${promedio}`);
  