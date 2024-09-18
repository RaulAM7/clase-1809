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
    console.log(numbers2)
    
}