/* CLASE 18-09



*/

/* 1.0.0.- Qué son los array methods?

Son funciones ya construidas en JS que nos permiten realizar operaciones con arrays, tales como:

    - iterar
    - transformar
    - filtrar
    - sorting
    - reducing
*/

/* 1.0.1.- Por qué usar array methods?

    - Simplifcar code -> una funcion con varios bucles anidados se puede comprimir en una sola linea
    - Mejorar performance
    - Enhance functionality
    - Mejorar productividad del dev -> no tienes que darte de cabezazos reinventando la rueda, ya hay gente que pensó en eso y lo hizo
    - Reducir la demanda de paracetamol
*/

/* 1.1.- TRAVERSE ARRAY METHODS  

*/

/* 1.1.0.- forEach() -> myArray.forEach(function(element, index) {} )  


    Va recorriendo el array con una vuelta para cada elemento
    En cada iteracion ejecuta la funcion callback que se le ha indicado
        
        OJO -> normalmente no se quiere que esta funcion retorne nada, se suele usar para:
            - modificar elementos del array
            - display a message
            - iniciar otros efectos secundarios



    Argumentos:

        1.- callback function -> la funcion que ejecuta en cada iteración -> VER OJO,    
        2.- element ->
        3.- index -> 


    CASOS DE USO:

        Normalmente cuando queremos recorrer un array y 
            - displayear cosas en consola
            - hacerle modificaciones al array original
            - u otros side effects que no impliquen un retorno

*/

// Ejemplos de forEach()
const numbers = [1, 2, 3, 4, 5]

// Queremos recorrerlo y printear cada elemento en consola
numbers.forEach(function (element, index) {

    //console.log('Index: ' + index + ' Elemento: ' + element)
})

// Queremos recorrerlo y modificar el array original cambiando cada elemento por su doble
numbers.forEach(function (element, index) {

    numbers[index] = element * 2
    //console.log(element)
})
//console.log(numbers)

/* 1.1.1.- FOR ... OF

    - SINTAXIS BASICA

        for (let variable of iterable) { sentencias que indican lo que queremos hacer }

    
    - ELEMENTOS SINTACTICOS

        variable -> recibe el valor de lo que se haga en cada iteracion
        iterable -> un objeto iterable como un Array o String
        statement -> sentencias que indiquen lo que se va a hacer en cada iteracion 

    - QUÉ HACE?
        Muy parecido al forEach()

    - CASOS DE USO
        Muy parecido al forEach()


*/

// Ejemplos de uso con for (let variable of iterable)
const numbers2 = [1, 2, 3, 4, 5]

// Si queremos que los recorra y printee en consola
for (let number of numbers2){

    //console.log(number)
}

// Si queremos que los recorra y vaya cambiando por su doble

let i = 0
for (let number of numbers2){
    
    numbers2[i] = number*2
    i++
    //console.log(numbers2)
    
}


/* 1.2.- MAP METHOD  

*/

/* 1.2.0.- MAP METHOD 

    - SINTAXIS BASICA
            myArray.map(callbackFunction)
            myArray.map(function(element) {body de la callbackFn} )
            myArray.map(function(element, index) {body de la callbackFn} )

    - ELEMENTOS SINTACTICOS
            - Callback function -> es la funcion que se ejecuta para cada elemento del array original
            - element -> es el elemento que se va procesando en cada iteracion
            - index -> el indice del current element procesandose en la iteracion determinada

    - QUÉ HACE?
        - El metodo map CREA Y RETORNA un NUEVO ARRAY
            - Con la misma length que el original
            - Lo rellena con los returned values de la funcion callback
*/
/* CASOS DE USO MAP METHOD

            1.- Principales
                - Aplicar una funcion a todos los elementos de un array
                - Crear un nuevo array basado en el original transformando sus elementos

            2.- Deseables
                - Formatear los datos de un array
                - Extraer propiedades especificas de los objetos 
                - Realizar cálculos en cada elemento
            
            3.- Casos más avanzados
                - Encadenar con otros métodos de array
                - Usar con funciones ASINCRONAS (con Promise.all)
                - Implementar patrones funcionales

*/

const numbers3 = [1, 2, 3, 4, 5, 6]
// Queremos generar un nuevo array compuesto por los dobles de cada elemento del array numbers3
const doubled = numbers3.map(function (element, index) {
        return element*2
})
//console.log(`Este es el array original: ${numbers3}`)
//console.log(`Este es el array modificado con .map: ${doubled}`)

/* Tenemos un Array que contiene un Objeto
    
    - Queremos que una funcion .map acceda a ese Objeto dentro del Array 
    - Coja una parte de ese Objeto
    - Declare un nuevo Objeto
    - Meta esa parte del Objeto inicial que nos interesa y retorne ese nuevo Array con ese nuevo Objeto con una parte del Ojeto original dentro
*/


const studentsArrayOriginal = [ // Declaramos el array original
    {name: 'Pepe', grade: 8, age: 24},
    {name: 'Jose', grade: 4, age: 26},
    {name: 'Juan', grade: 6, age: 31},
]

// Queremos crear un nuevo array con un objeto dentro que solo contenga nombre y age

// Aqui declaramos un nuevo array que contendra lo que hagamos con el metodo map 
// Este map invoca una funcion que toma dos parametros -> element que es el elemento que recorre en cada iteracion, index el index del element

const studentsArrayObjectMapped = studentsArrayOriginal.map(function(element, index){

    let newElement = {}   // Creamos el nuevo objeto dentro del nuevo array

    newElement.name = element.name // Añadimos la propiedad name al unevo objeto y definimos su valor como la del elemento que recorre
    newElement.age = element.age 
    
    return newElement // Retornamos el objeto fuera para que se pueda acceder en scope global
})

console.log(studentsArrayOriginal)
console.log(studentsArrayObjectMapped)