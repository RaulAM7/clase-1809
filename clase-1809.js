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

    console.log('Index: ' + index + ' Elemento: ' + element)
})

// Queremos recorrerlo y modificar el array original cambiando cada elemento por su doble
numbers.forEach(function (element, index) {

    numbers[index] = element * 2
    console.log(element)
})
//console.log(numbers)

/* 1.1.1.- FOR ... OF

    - SINTAXIS BASICA

        for (variable of iterable) { sentencias que indican lo que queremos hacer }

    
    - ELEMENTOS SINTACTICOS


    - QUÉ HACE?


    - CASOS DE USO


*/