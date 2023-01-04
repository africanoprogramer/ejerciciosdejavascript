/**
 * -------------------VARIABLES-------------------

1.Create a variable called carName, assign the value Volvo to it. 2
2.Create a variable called x, assign the value 50 to it. 2
3. Muestra la suma de dos variables con getelmentby.... 2
4.Create a variable called z, assign x + y to it, and display the result in an alert box. 2
5.On one single line, declare three variables with the following names and values: 'ondo' 'edu' 30 2
 */

/**
 
----------------------OPERADORES-------------------

1.-Operdores de asignacion: asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

a) crea una variable asignale un numero, despues llama de nuevo esta variable y sumale +=5 y muestra el resultao 2
b) lo mismo con la resta; 2
c) lo mismo con la multiplicacion; 2
d) lo mismo con la division; 2
e) lo mismo con el resto -> ten encuenta que el resto lo conseguimos al numero mas cercano hacia abajo del numero divido, nos muestra el resto de una division. 2


2.- Operdores aritmeticos: toman valores numericos ya sean literales o variables como sus operandos y retornan un valor numerico unico

a) crea una variable y asignale un valor numerico y despues restale con este operador -- y luego muestralo en una varibale y lo muestras; 2
b) haslo mismo con la suma 2
c) divide dos numeros con variables diferentes. 2
d) Divide 10 by 2, and alert the result: 2
e) Alert the remainder(el resto de cuandp 15 es divido entre 9) when 15 is divided by 9. 2

3.- Operadores de comparacion 
a) compara dos valores usando && 1
b) el mismo ejemplo pero despues retornando un valor 2


 */

/**
 *----------------------TEMPLATE STRING-----------------------------

1. Concate dos frases 2
2. crea dos promt y concatena las frases, 2
3. usa las comillas invertidas y ponle un div y anhadele una lista desordenada 1

---------------------TYPOS DE DATOS-------------------------------

- Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra  2
- una alerta con el resultado de la suma. 2

- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. 1
- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 2
- Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. 2

 */

/**
 * --------------------------------------CONDICIONALES-------------------------------
 * 1.- Hacer un ejercicio con if else si tiene menos de 18 anhos no puede votar y si tiene 18  puede votar y si tiene mas de 18 puede votar y conducir.
 * 2.- Has un ejemplo que al seleccionar el tipo de clima te muestra unas ecrituras, tengo hacer un select y coger una p desde el html 
 * 3.- Hacer un ejercicio con switch
 * 
 */

/**
 * ---------------------------------------ARRAYZ----------------------------------------
 * 1.-crea un array de tres frutas, anhade una fruta y se posiciona en la ultima posicion, otra fruta que se posicione en la primera posicion, cambia el valor del tercer array, elimina el primer array, elimina el ultimo array.
 * 2.- En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.
 */

/**
 * --------------------------------------LOOPS------------------------------------------
 * 1.-Cuenta los numeros hasta 10 for
 * 2.- has funcion que salude a los estudiantes.
 * 
 
 */

let estudiantes = ['Francisco','Braulio','Bodien']

estudiantes.push('Benjamin')

function Saludar(estudiantes) {
    return `Hola ${estudiantes}`
    
}



for (let i = 0; i < estudiantes.length; i++) {


    console.log(Saludar(estudiantes[i]))
    
    
}

