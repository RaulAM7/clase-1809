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

const solucion1 = numbEjercicio.map(function (element, index) {

    return element*2
})


const solucion2 = numbEjercicio.map(doblar)
//console.log(solucion1)


/*
Tienes el array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "Ana", edad: 25 }]. 
Usa map() para crear un array que contenga solo los nombres.
*/

const nombresEjercicio = [
    { nombre: "Juan", edad: 20 }, 
    { nombre: "Ana", edad: 25 }
]

function reformateoEjercicio (element, index) {

    let newObject = {}

    newObject.nombre = element.nombre

    return newObject
}

const solucionEjercicionombres = nombresEjercicio.map(reformateoEjercicio)
//console.log(solucionEjercicionombres)

function reformateoEjercicioOtroApproach (element, index) {

    return element.nombre
}

const solucionEjercicioNombresOtroApproach = nombresEjercicio.map(reformateoEjercicioOtroApproach)
//console.log(solucionEjercicioNombresOtroApproach)


// Ejemplos usando el filter

const ages = [12, 18, 22, 15, 30, 17, 25];

function filtrar0 (element, index) {

    if (element >= 18){
        return element
    }
}

const agesFiltradas = ages.filter(filtrar0)

const agesFiltradas1 = ages.filter(function (element, index) {

    if (element >= 18) {
        return element
    }
})


const numbersASD = [1, 2, 3, 4, 5, 6, 7, 8]

function lessFive (element, index) {

    if (element < 5){
        return element
    }
}
const numbersASDlessFive = numbersASD.filter(lessFive)
//console.log(numbersASDlessFive)

const numbersASDlessFiveB = numbersASD.filter(function(element, index){
    
    if (element < 5) {
        return element
    }
})
//console.log(numbersASDlessFiveB)

const words = ['a', 'hello', 'Reboot', 'students', 'bay']

function moreThreeLetras (element, index){

    if (element.length > 3){
        return element
    }
}

const wordsMoreThree = words.filter(moreThreeLetras)
//console.log(wordsMoreThree) 

const wordsMoreThreeB = words.filter(function(element,index){
    
    if (element.length > 3){
        return element
    }
})

//console.log(wordsMoreThreeB)

//Dado el array de números [3, 5, 8, 12, 15], usa filter() para crear un nuevo array que solo contenga los números mayores que 10.

const oldARR1 = [3, 5, 8, 12, 15]

function mayorDiez (element, index) {

    if (element > 10){
        return element
    }
}
const solucionARR1 = oldARR1.filter(mayorDiez)
//console.log(solucionARR1)

/* Tienes un array de cadenas ["perro", "gato", "elefante", "ratón"]. 
Usa filter() para crear un nuevo array que solo contenga las palabras con más de 4 letras.
*/

const oldARR2 = ["perro", "gato", "elefante", "ratón"]

function masCuatroLetras (element, index) {

    if (element.length > 4 ){
        return element
    }
}
const solucionOldARR2 = oldARR2.filter(masCuatroLetras)
//console.log(solucionOldARR2)


// EJEMPLOS DE metodo find

const numbers153 = [1, 9, 3, 4, 5]

function encuentraPrimerPar (element, index){

    if (element % 2 === 0){
        return element
    }
}
const solnumber153 = numbers153.find(encuentraPrimerPar)
//console.log(solnumber153)


// Dado el array [3, 1, 4, 1, 5, 9], usa sort() para ordenarlo de menor a mayor.

const arrEjer = [3, 1, 4, 1, 5, 9]

const arrSolEjer = arrEjer.sort(function(a,b) { return b - a } )

//console.log(arrSolEjer)

// Ordenar alfabeticamente ["perro", "gato", "elefante", "ratón"].

const arrEjer9874 = ["perro", "gato", "elefante", "ratón"]

const solucionEjer9898 = arrEjer9874.sort(function (a,b) { 
    
    if (a < b){

        return -1

    } if (a > b){

        return 1
        
    } else {
        return 0
    }

})

//console.log(solucionEjer9898)


/*
Tienes un array de objetos [{ nombre: "Ana", edad: 22 }, { nombre: "Luis", edad: 18 }]. 
Usa sort() para ordenarlos por la edad en orden ascendente.

*/

const ejerc89ARR = [
    { nombre: "Ana", edad: 22 }, 
    { nombre: "Luis", edad: 18 }
]

const ejerc89ARRSorted = ejerc89ARR.sort(function(a,b) {

    if (a.edad < b.edad){

        return -1

    } if (a.edad > b.edad){

        return 1
        
    } else {
        return 0
    }

})

//console.log(ejerc89ARRSorted)



const arrPruebas = [2,10,4,22,56,1000,3,45,6]

// Primero ordenandolo a la mano con un algoritmo burbuja

for (let i = 0 ; i < arrPruebas.length ; i++ ) {

    for (let j = i +1 ; j < arrPruebas.length ; j++) {

        if (arrPruebas[i] < arrPruebas[j]) {

            let temp = arrPruebas[i]
            arrPruebas[i] = arrPruebas[j]
            arrPruebas[j] = temp
        }
    }
}


// Ahora vamos a hacerlo con el metodo sort

const arr80 = [2,10,4,22,56,1000,3,45,6]

const solarr80 = arr80.sort(function (a,b){
    return a-b
})

console.log(solarr80)

arr80.map(function (element, index){
    return element*2
})

//console.log(solarr80)


// EJEMPLOS USANDO REDUCE


// Queremos el sumatorio
const arrOLD = [12, 18, 22, 15, 30, 17, 25]

const sumatorio = arrOLD.reduce(function (accum, element, index) {

    return [accum[0] + element]

},[0])

//console.log(sumatorio)



// Return the sum of the even numbers inside the array
const arr897987 = [1, 2, 100, 4, 50, 5]

const sumatorioPares = arr897987.reduce(function(accum, element, index) {

    if (element % 2 === 0){
        return accum + element
    } else {
        return accum
    }

},0)

//console.log(sumatorioPares)

const sumatorioImpares = arr897987.reduce(function(accum, element, index){

    if (element % 2 !== 0){
        return accum + element  
    } else {
        return accum
    }

},0)

//console.log(sumatorioImpares)

// Queremos un Array con los impares

const arrayImpares = arr897987.reduce(function(accum, element, index){

    if (element % 2 !== 0){
        accum.push(element)
        
    }
    return accum

}, [])

console.log(arrayImpares)

const cart = [
    { product: 'water', price: 1.49 },
    { product: 'tomato', price: 2.15 },
    { product: 'milk', price: 6.39 },
    { product: 'bread', price: 0.99 },
]
  
// Return a new array with elements cheaper than 2.5

const cartBarato = cart.reduce(function(accum, element, index){

    if (element.price < 2.5){
        accum.push(element)
    }
    return accum
    
},[])

//console.log(cartBarato)

const numbers35213 = [1, 2, 3, 4];

const suma = numbers35213.reduce(function(accumulator, current, index){

    return accumulator + current
}, 0)

//console.log(suma)

const cart1 = [
    { product: 'water', price: 1.49 },
    { product: 'tomato', price: 2.15 },
    { product: 'milk', price: 6.39 },
    { product: 'bread', price: 0.99 },
]

// Return a new array with elements cheapers than 2.5

function priceFiltrer (cart, priceBaremo) {

    const cartFiltred = cart.reduce(function(accumulator, currentValue, index){

        if (currentValue.price < priceBaremo) {
            accumulator.push(currentValue)

        }
        return accumulator
    },[])

    return cartFiltred
}

// Esta funcion al ser llamada toma un cart y un baremo y se encarga de filtrar por precios y retorna un array con los objetos que cumplen
//console.log(priceFiltrer(cart1, 2.5))
//console.log(cart1)

/* Por ejemplo, podriamos crear una funcion que tomara como parametros y cart y un precio

Y devolviera un nuevo array con un objeto reformateado 

*/

/* function priceFiltrerReformated (cart, priceBaremo) {

    const cartFiltred = cart.reduce(function(accumulator, currentValue, index){

        if (currentValue.price < priceBaremo){
            accumulator.push(currentValue)
        }
        return accumulator
    }, []).map(function(element, index){

        let newObject = {}
        newObject.nameProduct = element.product
        newObject.data = {price: element.price}

        return newObject
    })
    return newObject
}

console.log(priceFiltrerReformated(cart1, 2.5))
*/


// Vamos a filtrar pares, luego duplicar cada uno y quiero que al final retorne el valor del sumatorio de todo
const numerosOtraVez = [1, 2, 3, 4, 5]

const result = numerosOtraVez
    .filter(function(currentValue, index) {

    if (currentValue % 2 ===0) {
        return currentValue
    }

}).map(function(currentValue, index){

    return currentValue*2

}).reduce(function(accumulator, currentValue, index){
    return accumulator + currentValue
},0)

// console.log(result) // Bien

// Problema: Tienes un array de personas con nombres y edades, y quieres obtener un array de los nombres de las personas mayores de 18 años.

var personas789 = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "María", edad: 15 }
];

const solution = personas789

.filter(function(currentValue, index){

    if (currentValue.edad > 18){

        return currentValue
    }

}).map(function(currentValue, index){

    return currentValue.nombre
})

// console.log(solution) // Bien

/*Problema: Tienes un array anidado de arrays de números. CHAINING METHODS IN MULTIDIMENSIONAL ARRAYS 
Quieres sumar todos los números que sean pares.
*/

const arraysDeNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const solucion3 = arraysDeNumeros

    .reduce(function(flat, current){
        return flat.concat(current)
    }, [])

    .filter(function(currentValue, index){
        if (currentValue % 2 === 0){
            return currentValue
        }
    })

    .reduce(function(accumulator, currentValue, index){
        return accumulator + currentValue
    },0)


// console.log(solucion3)



const transactions = [
    { amount: 50, type: 'deposit' },
    { amount: 100, type: 'withdrawal' },
    { amount: 200, type: 'deposit' },
    { amount: 150, type: 'withdrawal' }
];

const transactionsSorted = transactions
    .sort(function(a,b){

        return a.amount - b.amount
    })

const transactionsSortedAndAccumulator = transactionsSorted

    .reduce(function (accumulator, currentValue, index){

        if (currentValue.type === 'deposit'){

            accumulator.totalDeposits += currentValue.amount
        } else {

            accumulator.totalWithdrawals += currentValue.amount
        }
        return accumulator

    }, {totalDeposits: 0 , totalWithdrawals: 0} )

console.log(transactionsSortedAndAccumulator)