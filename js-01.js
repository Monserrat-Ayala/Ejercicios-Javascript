
//*Ejercicio 1
//Suma de resistencias en serie
//Calcula la suma de todas las resistencias conectadas en serie.
//Ejemplos:
//- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
//- `sumResitance([14,3.5,6])` debería devolver `'23.5 ohmios'`. (14 + 3.5 + 6 = 23.5)
//- `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)

//Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.

function sumResistance(resistances) { //Crea una funcion que toma una lista de reistencias
    let absoluteResistances = resistances.map(Math.abs); //Tomar el valor absoluto de cada resistencia (map- para recorrer cada resistencia de la lista) y se aplica (math.abs- toma un valor absoluto lo convierte en positivo todos)
    
    let totalResistance = absoluteResistances.reduce((sum, resistance) => sum + resistance, 0); //Sumar todos los valores (reduce- suma todos los valores) la funcion toma 2 parametros el acumulador sum y resistance y los suma 
    
    return '${totalResistance} ohmios'; //Devolver la suma con la unidad "ohmios"
}

  console.log(sumResistance([-5, 8, 6, -10]));  // Devolver "29 ohmios"
  console.log(sumResistance([-10, 14, 6]));   // Devolver "30 ohmios"
  console.log(sumResistance([15, 20, 99]));  // Devolver "134 ohmios"
  



//*Ejercicio 2
  //Número dividido en dos mitades

//Dado un número, devuelve el número dividido en sus dos mitades en una matriz.

//Ejemplo:
//- `numDiv(4)` debería devolver `[2, 2]`.
//- `numDiv(10)` debería devolver `[5, 5]`.


function numDiv(number) {
    
    let half = number / 2; //Dividir el número entre 2
    
    return [half, half]; //Devolver un array con ambas mitades- (half(mitad)-variable donde guardamos el resultado)
  }

  console.log(numDiv(8));  // [4, 4] 
  console.log(numDiv(20)); // [10, 10] 




//*Ejercicio 3
//Sociedad secreta

//Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.

//Ejemplos:
//- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'`.
//- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'`.
//- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'`.


function secretName(names) {
   
    let firstLetters = names.map(name => name.charAt(0)); //Obtener la primera letra de cada nombre
    
    
    firstLetters.sort(); // Ordenar las letras alfabéticamente(sort-ordena elementos de un arreglo array)
    
    let secret = firstLetters.join(''); // Unir las letras en una sola cadena (join(´ ´)devulve una matriz como una cadena)
    
    return secret; // retorna el secreto
  }
  
  console.log(secretName(["Monse", "Diego", "Carol"]));  // 'CDM'
  console.log(secretName(['Katy', 'Gaga', 'Rihanna', 'Joey', 'Mike', 'Roger'])); // 'GJKMRR'
  console.log(secretName(['Harry', 'Ron', 'Hermione'])); // 'HHR'



//*Ejercicio 4
//Estado en línea

//Muestra el estado en línea de una lista de usuarios.

//Ejemplo:
//- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debe devolver `'mockIng99, J0eyPunch y 1 más en línea'`.


function onlineStatus(users) {
    const numUsers = users.length; // en una variable (const) guardamos el calculo de cuantos usuarios hay en la lista (users)
    //verificar el numero de usuario y crear una cadena
    if (numUsers === 0) { // Si numUser es 0 (no hay usuarios)
      return 'Nadie en línea'; //Devolver (nadie en linea)
    } else if (numUsers === 1) { // Si numUsers es 1 (hay un solo usuario)
      return users[0] + ' en línea'; // Devolver nombre de usuario seguido de (en linea)
    } else if (numUsers === 2) { // Si numUser es 2 (hay dos usuarios) 
      return users[0] + ' y ' + users[1] + ' en línea'; // Devolver nombres de usuarios en linea separados y seguidos de (en linea)
    } else {
      return users[0] + ', ' + users[1] + ' y ' + (numUsers - 2) + ' más en línea'; // Si numUser es mayor que 2, devolvemos los nombres y "x" mas en linea
    }
  }
  
  console.log(onlineStatus(['lucky77', 'flowers88', 'flyfer99']));  // llamamos la funcion (onlineStatus) con 3 usuarios 'lucky77', 'flowers88' y 1 más en línea'
  console.log(onlineStatus(['user1']));  // llamamos la funcion (onlineStatus)'user1 en línea'
  console.log(onlineStatus(['user1', 'user2']));  // llamamos la funcion (onlineStatus) con 2 usuarios'user1 y user2. Devuelve user1 y user2 en linea
  console.log(onlineStatus([]));  // llamamos la funcion (onlineStatus) con ningun usuario. Devuelve 'Nadie en línea'
  
//*Ejercicio 5
//Matriz de múltiplos

//Crea una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.

//Ejemplos:
// `arrayMultiplos(2, 10)` debe devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// `arrayMultiplos(17, 6)` debe devolver `[17, 34, 51, 68, 85, 102]`.

function arrayMultiplos(numero, longitud) { //funcion que toma un arrayMultiplos y toma dos raices numero y longitud
    let resultado = [];  // Crear un array vacío para almacenar los resultados
  
    // crear un bucle para generar los múltiplos
    for (let i = 1; i <= longitud; i++) { //empieza con 1 y se repite hasta llegar al num que queremos (la longitud)
      resultado.push(numero * i);  // Calcular el múltiplo y agregarlo al array
    }
  
    return resultado;  // Paso 4: Devolver el array con los múltiplos
  }
  
  console.log(arrayMultiplos(2, 10));  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  console.log(arrayMultiplos(17, 6));  // [17, 34, 51, 68, 85, 102]

  //*Ejercicio 6
  //Dominancia positiva en matriz

//Escriba una función para determinar si una matriz es positivamente dominante.
//Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.

//Ejemplo:
// `positiveDom([-1, -3, -5, 4, 6767])` debe devolver `false`.

function positiveDom(arr) { //creamos una funcion(postivDom) que toma una lista de numero en (arr)
    let countPositive = 0;  // Inicializar un contador para los elementos positivos
  
    //Recorrer la matriz y contar los elementos positivos
    for (let i = 0; i < arr.length; i++) { //se inicia un bucle que empieza con 0 y se repite hasta que haya revisado todos los num de la lista (arr)
      if (arr[i] > 0) { // dentro del bucle revisamos que cada numero (arr[i]) comparar si es positivo o mayor que 0
        countPositive++;  // Incrementar el contador a 1 si el elemento es positivo
      }
    }
  
    //Comparar la cantidad de elementos positivos con la mitad del tamaño de la matriz
    return countPositive > arr.length / 2;
  }
  
  console.log(positiveDom([3, -1, -4, 2, 5, 10]));  // true (la matriz es positivamente dominante)
 
 
 
  //*Ejercicio 7
  //Promedio antípoda

//Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
//- Divida la matriz en dos partes iguales*. Si no son iguales, elimine el elemento del medio para obtener dos matrices iguales.
//- Sume cada número de la primera parte con los números inversos de la segunda parte.
//- Divida cada número de la matriz resultante por 2.
//Ejemplo:
//- Para la matriz `[1,2,3,5,22,6]`, el resultado debe ser `[3.5, 12, 4]`.

  function promedioAntipoda(arr) { // crea una funcion y se toma una lista de num(arr)
    //Dividir la matriz en dos partes iguales
    const len = arr.length; // len es la longitud (num de emlementos de la lista arr)
    const half = Math.floor(len / 2); //half es la mitad de len (esto lo hacemos con match.floor)
    let firstPart, secondPart; // primera y segunda parte
  
    if (len % 2 === 0) {
      //Si la longitud es par, dividir directamente
      firstPart = arr.slice(0, half); //empieza en 0 y termina en la primera mitad
      secondPart = arr.slice(half); 
    } else {
      // Si la longitud es impar, eliminar el elemento del medio
      firstPart = arr.slice(0, half);
      secondPart = arr.slice(half + 1);
    }
  
    //Sumar cada número de la primera parte con los números inversos de la segunda parte
    let result = []; //nueva lista llamada result
    for (let i = 0; i < firstPart.length; i++) { //usamos un bucle para recorrer cada numero de la primera part
      result.push((firstPart[i] + secondPart[secondPart.length - 1 - i]) / 2); //sumamos cada num de la primera parte con el numero inverso de la segunda parte y dividimos la suma por 2
    }
  
    // Devolver la matriz resultante
    return result;
  }
  
  console.log(promedioAntipoda([3, 6, 3, 7, 22, 8]));  // [5.5, 14, 5]