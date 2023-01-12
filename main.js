/**
 * -------------------VARIABLES-------------------

1.Create a variable called carName, assign the value Volvo to it. 4
2.Create a variable called x, assign the value 50 to it. 4
3. Muestra la suma de dos variables con getelmentby.... 4
4.Create a variable called z, assign x + y to it, and display the result in an alert box. 4
5.On one single line, declare three variables with the following names and values: 'ondo' 'edu' 30 4
 */

/**
 
----------------------OPERADORES-------------------

1.-Operdores de asignacion: asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

a) crea una variable asignale un numero, despues llama de nuevo esta variable y sumale +=5 y muestra el resultao 4
b) lo mismo con la resta; 4
c) lo mismo con la multiplicacion; 4
d) lo mismo con la division; 4
e) lo mismo con el resto -> ten encuenta que el resto lo conseguimos al numero mas cercano hacia abajo del numero divido, nos muestra el resto de una division. 4


2.- Operdores aritmeticos: toman valores numericos ya sean literales o variables como sus operandos y retornan un valor numerico unico

a) crea una variable y asignale un valor numerico y despues restale con este operador -- y luego muestralo en una varibale y lo muestras; 4
b) haslo mismo con la suma 4
c) divide dos numeros con variables diferentes. 4
d) Divide 10 by 2, and alert the result: 4
e) Alert the remainder(el resto de cuandp 15 es divido entre 9) when 15 is divided by 9. 4

3.- Operadores de comparacion 
a) compara dos valores usando && 3
b) el mismo ejemplo pero despues retornando un valor 4


3.- Operaciones de comparacion 1
son los que devuelven un resultado buleano. 2
a) compara un texto si es igual al otro 2
b) compara si un texto es  diferente a otro. 2
c) compâra si un texto es diferente a otro comparando con el mismo tipo de dato 2
d) compara si un numero es menor al otro 2
e) compara si la dimencion de un texto es mayor al otro 2
f) compara dos valores un verdadero y otro falso con ||, ten encuenta que este operador coge el valor verdadero a diferencia de && que returna falso si tana solo un valor es falso. 2
g) Con el operador correcto devuelve el valor direfente al que imprimes (true or false) 2
 */

/**
 *----------------------TEMPLATE STRING-----------------------------

1. Concate dos frases 3
2. crea dos promt y concatena las frases, 3
3. usa las comillas invertidas y ponle un div y anhadele una lista desordenada 2

---------------------TYPOS DE DATOS-------------------------------

- Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra  4
- una alerta con el resultado de la suma. 4

- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. 3
- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 4
- Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. 4

 */

/**
 * --------------------------------------CONDICIONALES-------------------------------
 * 1.- Hacer un ejercicio con if else si tiene menos de 18 anhos no puede votar y si tiene 18  puede votar y si tiene mas de 18 puede votar y conducir. 1
 * 2.- Has un ejemplo que al seleccionar el tipo de clima te muestra unas ecrituras, tengo hacer un select y coger una p desde el html 1
 * 3.- Hacer un ejercicio con switch 1
 * 4.- Hacer un ejercicio de tres jovenes que compran helados dependiendo la cantidad de dinero que tienen, el program les indica el . utilizando >= 1
 */

/**
 * ---------------------------------------ARRAYZ----------------------------------------
 * 1.-crea un array de tres frutas, anhade una fruta y se posiciona en la ultima posicion, otra fruta que se posicione en la primera posicion, cambia el valor del tercer array, elimina el primer array, elimina el ultimo array.
 * 2.- En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.
 * 3.-
 */

/**
 * --------------------------------------LOOPS------------------------------------------
 * 1.-Cuenta los numeros hasta 10 for
 * 2.- has funcion que salude a los estudiantes.
 * 3.- lo mismo pero con for of
 * 4.- ejercuta un numero con while
 * 5.- saluda a estudiantes con  while
 * 6.- hacer lo mismo con do while clase numero 20 platzi

 
 */

/**
 * --------------------------------------OBJETOS------------------------------------------
 * 1.-Hacer un objeto de un auto;
 * 2.- crear un input select en html y crear un objeto de un veiculo que al seleccionar algo el select sea la informacion que te retore el objeto.
 * 3.- crea un funcion dentro del objeto que retorne la informacion que se encuentra dentro del objeto.
 * 4.- crear funcion constructora de un auto despues llama una instancia con un  nuevo auto
 * 5.- crea una tarrea que agrega 7 autos y muestralos
 * 6.- hacer una funcion que solo reciba un objeto como parametro, despues cuando le introduzcamos lo datos del auto si el auto no tiene licencia de conducir que lo traiga false

 
 */


/*

 * --------------------------------------CONDICIONALES-------------------------------

 * 2.- Has un ejemplo que al seleccionar el tipo de clima te muestra unas ecrituras, tengo hacer un select y coger una p desde el html 1
 * 3.- Hacer un ejercicio con switch 1
 * 4.- Hacer un ejercicio de tres jovenes que compran helados dependiendo la cantidad de dinero que tienen, el program les indica el . utilizando >= 1


 */let person = {
name : 'Lorna',
edad: 19,
 }

if(person.edad <= 17 && person.edad >= 1 ) {
    console.log('Todavia es menor de edad no puede conducir');
} else if(person.edad == 18){
    console.log('Solo puede votar pero hasta ahora no puede conducir');
}else if(person.edad > 18 ){ 
    console.log('Puede conducir y votar');
}else{
    console.log('tiavia es un feto');
}

 
document.querySelector('.container').innerHTML

let parafo =  document.querySelector('p')



let estacion = document.querySelector('#estaciones');

addEventListener('click', estaciones);


function estaciones() {

    if(estacion.value == 'primavera'){
      parafo.textContent = 'Esta es la mejor estacion para mucha gente'
    }else if(estacion.value == 'verano'){
        parafo.textContent = ' en esta estacion se gasta mas dinero'
    }
    
}
estaciones()










//document.querySelector('p').innerHTML = 

    

