/* Ejercicios para practicar la clase de METODOS PARA ARRAYS JS

*/


// Ejemplos de uso del forEach()

const numbers = [1, 2, 3, 4, 5]

// Printear en consola

numbers.forEach( function (element) {

    //console.log('Ejemeplo de forEach para recorrer un array y printear cada elemento: ' + element)

})

// Realizar cambios aritmeticos a un array y displayear en consola

numbers.forEach( function (element) {

    
    //console.log(element)
    element = element*2
    //console.log(element)
    
})

// Tienes un array de nombres: ["Ana", "Luis", "Pedro", "Juan"]. Usa forEach() para imprimir un saludo personalizado para cada nombre.

const nombres = ["Ana", "Luis", "Pedro", "Juan"]

function saludosNombres (element) {

    console.log('Buenos días: ' + element + '!!')
}

//nombres.forEach(saludosNombres)

// Dado el array de números [2, 4, 6, 8], usa forEach() para sumar 5 a cada número y muestra el resultado en la consola.

const numeros = [2, 4, 6, 8]

function sumarCinco (element, index) {

    rdo = element +5
    console.log('For each para suma cinco a: ' + element + ' Rdo: ' + rdo)
}

// numeros.forEach(sumarCinco)



// EJEMPLOS DE for (let variable of iterable)

const  fruits = ["apple", "banana", "cherry"]

for (let fruit of fruits) {

    //console.log('Ejemplo de un for...of para recorrer un array: ' + fruit)
}


// Ejercicios para practicar el uso de for...of

// Tienes el array ["manzana", "plátano", "cereza"]. Usa un bucle for...of para imprimir cada fruta en mayúsculas.

const frutas = ["manzana", "plátano", "cereza"]

function capStringInARRentire (element) {

    let a = element.toUpperCase()
    console.log(a)
}

function capStringInARR1STChar (fruta, index) {

    let a = fruta.charAt(0).toUpperCase() + fruta.slice(1)
    console.log('Fruta: ' + (index+1) + ': ' + a )
}

// frutas.forEach(capStringInARRentire)
// frutas.forEach(capStringInARR1STChar)



// Crea un array de objetos que represente personas, con propiedades nombre y edad. Usa for...of para imprimir los nombres de las personas mayores de 18 años.


const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "María", edad: 30 },
    { nombre: "Juan", edad: 22 },
    { nombre: "Laura", edad: 16 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Sofía", edad: 19 },
    { nombre: "Miguel", edad: 15 }
];

function printeanombresAdultos (element, index) {

    if (element.edad >= 18) {

        console.log(element)
    }
 
}

// personas.forEach(printeanombresAdultos)


// Ejemplos de uso de map method


const numbers1 = [1, 2, 3, 4];

function doblarNumsARR (element, index){

    return element *2
}

const numbers1Doubled = numbers1.map(doblarNumsARR)
//console.log(numbers1Doubled)


//Usando una infame funcion anonima

const numbers1Doblados = numbers1.map(function (element, index){

    return element*2
})

//console.log(numbers1Doblados)



// Usando estos dos arrays originales construir otro con los precios en euros
const pricesInDollars = [10, 20, 30, 40, 50];
const conversionRate = 0.85

function convertUSDtoEUR (element, index){

    return element * conversionRate
}

const pricesInEuros1 = pricesInDollars.map(convertUSDtoEUR)
//console.log(pricesInEuros1)

const pricesInEuros2 = pricesInDollars.map(function (element, index) {
    
    return element * conversionRate
})
//console.log(pricesInEuros2)

const arr0 = [1, 2, 3, 4, 5]

function multiplicarCinco (element, index) {
    
    return element*5
}

const arrPorCinco = arr0.map(multiplicarCinco)

// Usar el map para reformatear el objeto stremaers

const streamers = [
    { name: 'Rubius', followers: 1000000, peekView: 550000 },
    { name: 'elxokas', followers: 500000, peekView: 120000 },
    { name: 'auronplay', followers: 2000000, peekView: 770000 },
  ];

function reformatStreamrs (element, index) {

    let newObject = {}

    newObject.name = element.name
    newObject.data = {
        followers : element.followers,
        peekView : element.peekView
     }

    return newObject
}

const streamersReformated = streamers.map(reformatStreamrs)

console.log(streamersReformated)

// Ejercicios

// Dado el array de números [1, 2, 3, 4, 5], usa map() para crear un nuevo array que contenga el cuadrado de cada número.

const numbEjercicio = [1, 2, 3, 4, 5]

function doblar (element, index) {

    return element*2
}