/*
Este fichero Js adicional al principal en el que tomamos nota de todo el contenido de la clase del 18 de Septiembre de 2024

Lo creamos offline en el Hospital para practicar sintaxis y diseño de funciones para cada uno de los metodos 

Tambien para identificar bien casos de uso

Este archivo funciona como CLASE DE REPASO

*/

/*

FAMILIAS DE CASOS DE USO PARA METODOS DE ARRAY:

1.- TRAVERSE an array
2.- TRANSFORMING
3.- SORTING
4.- FILTERING
5.- REDUCING

*/


/* TRAVERSING methods

*/

/*  forEach() -> Recorre un array y ejecuta acciones sin retornar nada.

Sintaxis basica:

    - myArray.forEach(callback)
    - myArray.forEach(function (element) {} )
    - myArray.forEach(callback) (element, index) {} )


Casos de uso 
    
    Para cuando quieres iterar sobre un array realizando cambios pero no quieres que se retorne nada 
        -> LOS CAMBIOS NO LOS PUEDES RETORNAR FUERA DEL FOR EACH

*/


/* MAP method


- Sintaxis basica:
    
    - oldARR.map(callbackFN)
    - oldARR.map(function(element, index) {} )
    - const newARR =  oldARR.map(function(element, index) {} )
    
    Sintaxis clean
    
    - const oldARR = []
    - function [nombre lo que quieres que le haga al ]
    - const newARR = oldARR.map(function (element, index) {} )

*/

/* FILTER METHOD

- Sintaxis básica:

- oldARR.filter(callbackFN)
- oldARR.filter(function(element, index) {} )
- const newARR =  oldARR.filter(function(element, index) {} )


Sintaxis clean

- const oldARR = []
- function [lo que quieres filtrar] (element, index) {}
- const newARR = oldARR.filter(function (element, index) {} )

*/

/* FIND METHOD

Sintacis basica

    - oldARR = []
    - function buscarX(element, index) {return (lo que quieres que busque)}
    - newARR = oldARR.find(funcion)

Que hace?

    Devuelve el primer elemento que cumpla con la condicion

*/

/* SORT METHOD



*/

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

console.log(solarr80)