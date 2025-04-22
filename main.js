/**
 * ---------------------------------DEBES APRENDER ESO-----------------------------------------------------
 * Fundamentos:

Sintaxis básica: Variables, tipos de datos, operadores, estructuras de control (if, else, for, while, etc.)
Metodos string;
Arreglos: Métodos de manipulación, iteración
Objetos: Creación, propiedades, métodos
Funciones: Definición, tipos de funciones, parámetros, ámbito



Programación orientada a objetos:

Clases: Creación, herencia, métodos
Módulos: Importación y exportación de módulos
Programación asíncrona:
Promesas: Uso de promesas para manejar operaciones asíncronas
Async/await: Uso de async/await para simplificar el manejo de código asíncrono
DOM (Document Object Model):

Manipulación del DOM: Seleccionar elementos, modificar estilos, agregar eventos
*/

/**
 
A continuación te doy una lista de los conceptos básicos de programación en JavaScript: variables, tipos de datos, operadores, y estructuras de control (como if, else, for, while). También incluyo ejemplos y ejercicios para cada concepto.

1. Variables
Descripción: Se utilizan para almacenar información que se puede usar más tarde. JavaScript usa var, let, y const para declarar variables.
Sintaxis:

let nombre = "Juan";   // Variable que puede cambiar
const edad = 25;       // Variable que no puede cambiar (constante)
var pais = "España";   // Variable que puede cambiar (antiguo)

Ejercicios:

Declara una variable que almacene tu nombre y luego imprímela en la consola.
Declara una constante para la edad y trata de cambiar su valor. ¿Qué sucede?
Usa let para crear una variable que almacene el nombre de una ciudad, cambia su valor e imprímelo.


2. Tipos de datos
Descripción: En JavaScript, existen varios tipos de datos, incluidos:

String: Cadenas de texto.
Number: Números enteros o decimales.
Boolean: Valores lógicos (true o false).
Array: Listas de elementos.
Object: Colección de propiedades clave-valor.
Sintaxis:

javascript

let nombre = "María";     // String
let edad = 30;            // Number
let esMayor = true;       // Boolean
let colores = ["rojo", "azul"];  // Array
let persona = { nombre: "Pedro", edad: 40 };  // Object
Ejercicios:

Declara una variable de cada tipo de dato mencionado arriba.
Usa typeof para verificar los tipos de las variables que creaste.
Crea un objeto que represente un coche, con propiedades como marca, modelo, y año.


**********************************************************************OPERADORES ARITMETICOS PLATZI + 5 *****************************************************************************************

Explicación de cada concepto:

1. Tipo entero y decimal
Entero (int): Son números sin parte decimal, como 42.
Decimal (float): Son números con parte decimal, como 3.14.
En JavaScript, ambos son del tipo number.
Ejercicios:

Declara una variable edad con un número entero y otra altura con un número decimal. Muestra su tipo en consola.
Suma un número entero con un decimal y muestra el resultado.
2. Notación científica
Permite representar números muy grandes o pequeños usando e (exponente), por ejemplo, 5e3 es igual a 5000 (5 × 10³).
Ejercicios:

Declara un número en notación científica que represente 1 millón y muéstralo en consola.
Convierte el número 3.2e4 a su forma normal y compáralo con 32000.
3. Infinitos y NaN
Infinity: Representa valores infinitos, como cuando divides por 0.
NaN (Not a Number): Se obtiene cuando una operación matemática no es válida, por ejemplo, 0 / 0 o "texto" * 2.
Ejercicios:

Intenta dividir 10 entre 0 y muestra el resultado en consola.
Multiplica una cadena "hola" por 5 y verifica si el resultado es NaN con isNaN().
Operaciones Aritméticas
1. Suma, Resta, Multiplicación y División
Son las operaciones matemáticas básicas: +, -, *, /.
Ejercicios:

Calcula (8 + 2) * 5 y muestra el resultado.
Resta 15 menos 8, divídelo entre 2 y muestra el resultado.
2. Módulo y Exponenciación
Módulo (%): Devuelve el residuo de una división.
Exponenciación (**): Eleva un número a una potencia.
Ejercicios:

Calcula 27 % 4 y explica qué significa el resultado.
Eleva 5 al cubo (5 ** 3) y muestra el resultado.
Precisión en JavaScript
En operaciones con decimales, los resultados pueden no ser exactos debido a cómo los números se representan en memoria.
toFixed(n) permite redondear a n decimales.
Ejercicios:

Suma 0.1 + 0.2, redondea el resultado a 2 decimales y compáralo con 0.3.
Multiplica 0.7 * 100 y luego divide entre 100. ¿Es exactamente 0.7?
Operaciones Avanzadas
1. Raíz Cuadrada y Valor Absoluto
Math.sqrt(n): Devuelve la raíz cuadrada de n.
Math.abs(n): Devuelve el valor absoluto de n.
Ejercicios:

Calcula la raíz cuadrada de 81 y muestra el resultado.
Obtén el valor absoluto de -23 y verifica que sea 23.
2. Número Aleatorio
Math.random(): Devuelve un número entre 0 y 1.
Ejercicios:

Genera un número aleatorio entre 1 y 10.
Genera un número aleatorio entre 50 y 100 y redondéalo con Math.floor()




3. Operadores + 2
Descripción: Los operadores permiten realizar operaciones en variables y valores. Se dividen en:

Aritméticos: +, -, *, /, % (suma, resta, multiplicación, división, resto).
Asignación: =, +=, -=, *=, /= (asigna o actualiza valores).
Comparación: ==, ===, !=, !==, >, <, >=, <= (comparan valores).
Lógicos: &&, ||, ! (AND, OR, NOT).
Sintaxis:

javascript

let x = 5;
let y = 10;
let suma = x + y;  // 15
let esIgual = (x === y);  // false
let esMayor = (y > x);  // true
let resultadoLogico = (x < 10 && y > 5);  // true
Ejercicios:


4. Estructuras de control: if y else
Descripción: if se usa para ejecutar código basado en una condición. else se usa si la condición es falsa.
Sintaxis:
javascript
Copy code
let edad = 18;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
Ejercicios:
Crea un programa que verifique si una persona es mayor o menor de edad.
Escribe una función que acepte una nota y devuelva "Aprobado" si la nota es mayor o igual a 5.
Crea un programa que determine si un número es par o impar.
5. Estructura de control: for
Descripción: El bucle for se usa para repetir una sección de código un número específico de veces.
Sintaxis:
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);  // Imprime los números del 0 al 4
}
Ejercicios:
Crea un bucle for que imprima los números del 1 al 10.
Usa un bucle for para sumar todos los números del 1 al 100.
Crea un bucle que imprima cada elemento de un arreglo.
6. Estructura de control: while
Descripción: El bucle while ejecuta código mientras una condición sea verdadera.
Sintaxis:
javascript
Copy code
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
Ejercicios:
Crea un bucle while que imprima los números del 1 al 5.
Usa while para pedir un número al usuario y sigue pidiendo hasta que ingrese un número mayor a 10.
Crea un bucle que sume los números del 1 al 50 usando while.
7. Estructura de control: switch
Descripción: switch evalúa una expresión y ejecuta el código correspondiente según el caso que coincida.
Sintaxis:
javascript
Copy code
let color = "rojo";
switch (color) {
    case "rojo":
        console.log("El color es rojo");
        break;
    case "azul":
        console.log("El color es azul");
        break;
    default:
        console.log("No es rojo ni azul");
}
Ejercicios:
Usa switch para crear un programa que devuelva el día de la semana basado en un número (1 = lunes, 2 = martes, etc.).
Crea un programa que use switch para identificar si una fruta es "manzana", "plátano" o "naranja".
Usa switch para devolver el nombre de un mes según el número del 1 al 12.
8. Estructuras de control: do...while
Descripción: Similar a while, pero la condición se evalúa después de ejecutar el código, garantizando que se ejecute al menos una vez.
Sintaxis:
javascript
Copy code
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
Ejercicios:
Crea un programa que pida números hasta que se ingrese uno mayor a 100.
Usa do...while para contar del 10 al 1.
Crea un programa que sume números hasta que se ingrese un número negativo.

/**
 * ---------------------------------------VARIABLES 5---------------------------------------------------

 *
 Declaración y asignación de variables:

Enunciado: Declara tres variables (nombre, edad y ciudad) y asígnales valores. Luego, imprime cada una de las variables por separado.

Operaciones con variables numéricas:

Enunciado: Declara dos variables numéricas (num1 y num2) y realiza las siguientes operaciones con ellas: suma, resta, multiplicación y división. Imprime el resultado de cada operación.

Concatenación de variables de texto:

Enunciado: Declara dos variables de texto (nombre y apellido) y concaténalas para formar el nombre completo. Imprime el nombre completo resultante.

Variables booleanas y condicionales:

Enunciado: Declara una variable booleana (esMayorDeEdad) que indique si una persona es mayor de edad o no. Luego, utiliza una estructura condicional para imprimir un mensaje según el valor de esta variable.
tiene que haber if

Alcance de variables (scope):
tiene que ser una funcion y el mensaje fuera de hola y rl consolog dentro con hola con nombre

Enunciado: Declara una variable (mensaje) fuera de una función y otra variable con el mismo nombre dentro de la función. Dentro de la función, imprime el valor de la variable local (mensaje). Luego, fuera de la función, imprime el valor de la variable global (mensaje). Observa cómo cambia el alcance de las variables en cada caso.
 */

/**
 ************************************METDOS DE STRING 2*************************************************

 charAt()
Descripción: Devuelve el carácter en la posición especificada de una cadena.
Sintaxis: cadena.charAt(indice)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.charAt(4));  // Devuelve " "
Ejercicios:
Dado el string "JavaScript", devuelve el carácter en la posición 6.
Dado el string "Frontend", usa charAt para devolver el último carácter.
Dado el string "Cadena", utiliza un bucle para imprimir cada carácter.


2. indexOf()
Descripción: Devuelve la primera posición en la que se encuentra un valor dentro de una cadena. Si no lo encuentra, devuelve -1.
Sintaxis: cadena.indexOf(subcadena)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.indexOf("M"));  // Devuelve 5
Ejercicios:
Encuentra la posición de la palabra "script" en "JavaScript es increíble".
¿Qué devuelve indexOf("z") en la cadena "abcde"?
Usa indexOf para contar cuántas veces aparece la letra "a" en "manzana".


3. substring()
Descripción: Extrae una porción de una cadena entre dos índices. El segundo índice es opcional.
Sintaxis: cadena.substring(inicio, fin)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.substring(0, 4));  // Devuelve "Hola"
Ejercicios:
Extrae la palabra "Java" de la cadena "JavaScript".
Crea una función que, dada una cadena, devuelva los primeros 5 caracteres.
Extrae el dominio de un correo electrónico usando substring.


4. toUpperCase()
Descripción: Convierte una cadena a mayúsculas.
Sintaxis: cadena.toUpperCase()
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.toUpperCase());  // Devuelve "HOLA MUNDO"
Ejercicios:
Convierte la cadena "hola mundo" a mayúsculas.
Crea una función que reciba una frase y la devuelva en mayúsculas.
Convierte todos los elementos de un arreglo de strings a mayúsculas.


5. toLowerCase()
Descripción: Convierte una cadena a minúsculas.
Sintaxis: cadena.toLowerCase()
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.toLowerCase());  // Devuelve "hola mundo"
Ejercicios:
Convierte la cadena "HOLA MUNDO" a minúsculas.
Crea una función que reciba una frase y la devuelva en minúsculas.
Convierte todos los elementos de un arreglo de strings a minúsculas.


6. trim()
Descripción: Elimina los espacios en blanco de ambos extremos de una cadena.
Sintaxis: cadena.trim()
Ejemplo:
javascript
Copy code
let texto = "   Hola Mundo   ";
console.log(texto.trim());  // Devuelve "Hola Mundo"
Ejercicios:
Elimina los espacios iniciales y finales de la cadena " Programación ".
Crea una función que elimine los espacios en blanco de una entrada de usuario.
Usa trim para limpiar una cadena recibida de un formulario.


7. replace()
Descripción: Reemplaza parte de una cadena con otra.
Sintaxis: cadena.replace(valorBuscado, valorReemplazo)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.replace("Mundo", "Amigos"));  // Devuelve "Hola Amigos"
Ejercicios:
Reemplaza la palabra "JavaScript" con "Python" en la frase "Aprendiendo JavaScript".
Crea una función que reemplace todas las apariciones de la letra "a" en una cadena por "@."
Reemplaza los números de una cadena con un asterisco usando replace.


8. split()
Descripción: Divide una cadena en un array de substrings utilizando un delimitador.
Sintaxis: cadena.split(delimitador)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.split(" "));  // Devuelve ["Hola", "Mundo"]
Ejercicios:
Divide una frase en palabras usando los espacios como delimitador.
Convierte una cadena "nombre1,nombre2,nombre3" en un arreglo de nombres.
Crea una función que divida una cadena de números separados por comas y los sume.


9. includes()
Descripción: Verifica si una cadena contiene una subcadena específica. Devuelve true o false.
Sintaxis: cadena.includes(subcadena)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.includes("Mundo"));  // Devuelve true
Ejercicios:
Verifica si la cadena "JavaScript es increíble" contiene la palabra "increíble".
Crea una función que verifique si un correo contiene un "@".
Dada una lista de palabras, verifica si alguna contiene la letra "e".


10. startsWith()
Descripción: Verifica si una cadena comienza con una subcadena específica.
Sintaxis: cadena.startsWith(subcadena)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.startsWith("Hola"));  // Devuelve true
Ejercicios:
Verifica si el string "JavaScript" comienza con "Java".
Crea una función que compruebe si una URL empieza con "https".
Verifica si una lista de nombres empieza con la letra "A".


11. endsWith()
Descripción: Verifica si una cadena termina con una subcadena específica.
Sintaxis: cadena.endsWith(subcadena)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.endsWith("Mundo"));  // Devuelve true
Ejercicios:
Verifica si la cadena "Hola mundo" termina con "mundo".
Crea una función que compruebe si una URL termina en ".com".
Verifica si una lista de palabras termina con la letra "s".

 */

/**
 * ---------------------------------------OPERADORES 3---------------------------------------------------
 *
Operadores aritméticos:

Enunciado: Declara dos variables numéricas (num1 y num2) y realiza las siguientes operaciones aritméticas: suma, resta, multiplicación, división y módulo. Imprime el resultado de cada operación.

Operadores de comparación:

Enunciado: Declara dos variables (valor1 y valor2) y utiliza los operadores de comparación para determinar si valor1 es mayor que valor2, si son iguales y si son diferentes. Imprime el resultado de cada comparación.
 
Operadores de asignación:

Enunciado: Declara una variable numérica (total) y utiliza los operadores de asignación (+=, -=) para aumentar y disminuir su valor en 5. Imprime el valor de total después de cada operación.

Operadores lógicos:

Enunciado: Declara tres variables booleanas (a, b y c) y realiza las siguientes operaciones lógicas: a AND b, a OR b, y NOT c. Imprime el resultado de cada operación.

Operadores de concatenación de cadenas:

Enunciado: Declara dos variables de texto (nombre y apellido) y utiliza el operador de concatenación (+) para unirlas en una sola cadena que represente el nombre completo. Imprime el nombre completo resultante.
 */

/**
 * ---------------------------------------ESTRUCTURA DE CONTROL 3---------------------------------------------------
 *
Estructura if-else:

Enunciado: Declara una variable numérica (edad) y utiliza una estructura de control if-else para determinar si una persona es mayor de edad. Si la edad es mayor o igual a 18, imprime "Eres mayor de edad"; de lo contrario, imprime "Eres menor de edad".

Estructura switch:

Enunciado: Declara una variable (diaSemana) que represente un día de la semana (por ejemplo, "lunes", "martes", etc.). Utiliza una estructura de control switch para imprimir un mensaje diferente dependiendo del día. Por ejemplo, para "lunes", imprime "Hoy es lunes".

Estructura for:

Enunciado: Utiliza una estructura de control for para imprimir los números del 1 al 5 en la consola.

Estructura while:

Enunciado: Utiliza una estructura de control while para imprimir los números del 5 al 1 en la consola.

Estructura do-while:

Enunciado: Utiliza una estructura de control do-while para pedir al usuario que ingrese un número mayor que 10. Si el número ingresado es menor o igual a 10, sigue pidiendo al usuario que ingrese un número hasta que cumpla con la condición.

Estos ejercicios te ayudarán a practicar y comprender mejor las estructuras de control en JavaScript, incluyendo if-else, switch, for, while y do-while.
 */

/**
 /**
 * ---------------------------------------TIPOS DE FUNCIONES 3---------------------------------------------------
 *
Función básica:

Enunciado: Crea una función llamada saludar que imprima "¡Hola, mundo!" en la consola cuando sea llamada. Luego, llama a la función saludar.

Función con parámetros:

Enunciado: Crea una función llamada sumar que tome dos parámetros (num1 y num2) y devuelva la suma de ambos. Llama a la función sumar con dos números diferentes y muestra el resultado.

Función con valor de retorno:

Enunciado: Crea una función llamada esMayorDeEdad que tome un parámetro edad y devuelva true si la edad es mayor o igual a 18, y false en caso contrario. Llama a la función con diferentes valores de edad y muestra el resultado.

Función anónima:

Enunciado: Declara una variable llamada cuadrado y asígnale una función anónima que tome un parámetro (numero) y devuelva el cuadrado de ese número. Llama a la función cuadrado con un número y muestra el resultado.

Función flecha:

Enunciado: Convierte la función sumar del ejercicio 2 en una función flecha y prueba su funcionamiento llamándola con diferentes valores.
 */

/**
 * ***************************************FUNCIONES AMBITO GLOBAL Y LOCAL 3*******************************************
 * Ámbito global vs. ámbito local:

Enunciado: Declara una variable mensaje fuera de una función. Luego, dentro de una función llamada saludar, declara una variable con el mismo nombre. Imprime el valor de ambas variables dentro y fuera de la función. Observa cómo el ámbito local de la variable dentro de la función afecta su visibilidad y valor.

Modificación de variable global dentro de una función:

Enunciado: Declara una variable global contador con un valor inicial de 0. Crea una función llamada incrementarContador que incrementa el valor de contador en 1. Llama a la función y luego imprime el valor de contador. Observa cómo la función modifica la variable global y cómo el cambio persiste fuera de la función.

Ámbito léxico:

Enunciado: Define una función externa llamada externa que declare una variable mensaje con un valor dentro de ella. Dentro de externa, define otra función llamada interna que imprima el valor de mensaje. Llama a la función interna desde dentro de externa. Observa cómo la función interna puede acceder a la variable definida en su función externa, demostrando el concepto de ámbito léxico.
 */

/**
 /**
 * ***************************************PROPIEDADES 3*******************************************
Creación de un objeto:

Enunciado: Crea un objeto llamado persona con las siguientes propiedades: nombre, edad, ciudad. Asigna valores a estas propiedades y luego imprime el objeto completo en la consola.

Acceso a propiedades de un objeto:

Enunciado: Utiliza el objeto persona del ejercicio anterior y accede a cada una de sus propiedades por separado. Imprime cada propiedad en la consola.

Actualización de propiedades de un objeto:

Enunciado: Utiliza el objeto persona del ejercicio 1 y actualiza la propiedad edad a un nuevo valor. Luego, imprime el objeto completo para verificar que la propiedad se ha actualizado correctamente.

Añadir una nueva propiedad a un objeto:

Enunciado: Utiliza el objeto persona del ejercicio 1 y añade una nueva propiedad llamada profesion con un valor de tu elección. Luego, imprime el objeto completo para verificar que la nueva propiedad se ha añadido correctamente.

Eliminar una propiedad de un objeto:

Enunciado: Utiliza el objeto persona del ejercicio 1 y elimina la propiedad ciudad. Luego, imprime el objeto completo para verificar que la propiedad se ha eliminado correctamente.

/**
  /**
 * ***************************************METODOS 3 *******************************************
Método simple:

Enunciado: Crea un objeto llamado persona con las propiedades nombre y edad. Luego, agrega un método llamado saludar que imprima un mensaje de saludo junto con el nombre de la persona. Llama al método saludar para que la persona muestre el saludo.

Método con parámetros:

Enunciado: Modifica el objeto persona del ejercicio anterior para que el método saludar acepte un parámetro otroNombre. El método debe imprimir un mensaje de saludo junto con el nombre proporcionado como argumento. Llama al método saludar con diferentes nombres para probarlo.

Método que devuelve un valor:

Enunciado: Agrega un nuevo método llamado obtenerEdad al objeto persona que devuelva la edad de la persona. Luego, asigna el resultado del método a una variable y imprímela en la consola.

Método que modifica el objeto:

Enunciado: Añade un método llamado cumplirAnios al objeto persona que incremente su edad en 1 unidad. Llama al método y luego imprime la nueva edad de la persona.

Método con acceso a otras propiedades:

Enunciado: Crea un método llamado presentarse en el objeto persona que imprima un mensaje que incluya el nombre, la edad y cualquier otra propiedad del objeto. Llama al método para que la persona se presente.
/**
 
/*
----------------------------------------------------METODOS DE MANIPULACION, iteracion 3-------------------------------------------

map():

Uso: Se utiliza cuando se quiere crear un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.

filter():

Uso: Se utiliza cuando se quiere crear un nuevo arreglo con todos los elementos que cumplan una condición especificada en una función.

forEach():

Uso: Se utiliza para ejecutar una función por cada elemento del arreglo. Se utiliza principalmente cuando no se necesita crear un nuevo arreglo, sino realizar una acción sobre cada elemento del arreglo original.


Agregar elementos a un arreglo:

Enunciado: Declara un arreglo vacío llamado numeros. Luego, utiliza el método push() para agregar los números del 1 al 5 al final del arreglo. Imprime el arreglo resultante.

Eliminar elementos de un arreglo:

Enunciado: Utiliza el arreglo del ejercicio anterior. Elimina el último elemento del arreglo utilizando el método pop(). Imprime el arreglo resultante.

Transformar elementos de un arreglo:

Enunciado: Declara un arreglo de nombres llamado nombres con los siguientes nombres: "Juan", "María", "Pedro", "Ana". Utiliza el método map() para convertir todos los nombres a mayúsculas. Imprime el nuevo arreglo resultante.

map(): Duplicar cada elemento de un arreglo
let numeros = [1, 2, 3, 4, 5];

map(): Convertir nombres a mayúsculas:
let nombres = ['juan', 'maría', 'pedro'];


Enunciado: Utiliza el arreglo del ejercicio anterior. Filtra los nombres que tengan más de 3 letras utilizando el método filter(). Imprime el nuevo arreglo resultante.
filter(): Filtrar nombres que empiecen con 'A':
let nombres = ['Ana', 'Juan', 'Marta', 'Pedro'];
Filtrar elementos de un arreglo:
filter(): Filtrar números mayores que 5
let numeros = [2, 7, 4, 10, 3];


Enunciado: Declara un arreglo de números llamado numeros con los siguientes números: 10, 20, 30, 40, 50. Utiliza el método forEach() para imprimir cada número multiplicado por 2 en la consola.
forEach(): Imprimir el doble de cada número:
let numeros = [1, 2, 3, 4, 5];
forEach(): Imprimir la longitud de cada nombre:
let nombres = ['Juan', 'María', 'Pedro'];


// map, filter, foreach, primero dublica el array y filtra los numeros mayores a 2, y con foreach console.log el numero filtrado
map(), filter(), forEach(): Combinar métodos:
Copy code
let numeros = [1, 2, 3, 4, 5];



/*

/**
 * --------------------------------------STRING 3 METHOD--------------------------------------------
 * charAt(index): Esta función devuelve el carácter en la posición específica de una cadena. me duevuelve la letra
 * El índice (index) es un número entero que representa la posición del carácter que se desea obtener
 
 * 
 *indexOf(searchValue, startIndex): La función indexOf busca la primera ocurrencia de un valor especificado (searchValue) dentro de una cadena. 
  Si lo encuentra, devuelve el índice de la primera aparición. Puedes especificar opcionalmente un índice inicial (startIndex) desde donde comenzar la búsqueda. 
  Si no se encuentra el valor, devuelve -1.
 me duelvuel un numero, represaenta la posicion


  slice(startIndex, endIndex): La función slice extrae una parte de una cadena y devuelve una nueva cadena. 
  Toma dos parámetros: el índice de inicio (startIndex) y el índice final (endIndex) (este último es opcional). 
  slice extrae desde startIndex hasta endIndex (sin incluir endIndex). Si endIndex no se proporciona, extrae hasta el final de la cadena. 
 * 
 
  replace() en JavaScript se utiliza para reemplazar parte de una cadena por otra y devuelve una nueva cadena con los reemplazos realizados.
Su sintaxis es la siguiente: cadena.replace(valorAnterior, valorNuevo)
 * 
*null quiere decir que es valor que hemos inicializado pero no llega todavia, en cambio undefine es un valor asignado por javascript que todo no hhay ningun valor inicializado

Math El objeto Math en JavaScript proporciona constantes y métodos para realizar operaciones matemáticas. 
Contiene propiedades y métodos estáticos que no son instancias de un objeto Math, por lo que se accede directamente al objeto Math en sí mismo. 
Math.round(x): Redondea x al entero más cercano.
Math.floor(x): Redondea hacia abajo al entero más cercano.
Math.ceil(x): Redondea hacia arriba al entero más cercano.



 * 2. lo mismo pero ahora con la letra l, y tambien intenta con una palabra 'que'
 * 3. Crea un array de colores y haz un funcion que retorne el color azul y si no lo encuentra que diga este color no se encuentra
 * 3.-Escribe la palabra Javascript y devuelve solo java, y despue aparte tambien devuelve el script
 * 4.-crea un array de numeros, y haz una funcion que traiga los numeros que se encuentran desde el segundo hasta el quito numero

 * 2. lo mismo pero ahora con la letra l, y tambien intenta con una palabra 'que' indexof
 * 3.-Escribe la palabra Javascript y devuelve solo java, y despue aparte tambien devuelve el script slice
 * 4.- Replaza Hola mundo con Hola amigo
 * 5. Calcula la raiz cuadrada de 8 con el metodo correcto
 * 6.- Escribe una función que tome un número como entrada, calcule la raíz cuadrada de ese número y devuelva el resultado redondeado hacia abajo y hacia arriba.
 * 7.- Crea un perfil de redes sociales donde el usuario tiene, informacion personal dale slice en el nombre, direccion, y sus hoobies, la direccion es un objeto, hoobies array,
 * 8.- 


 
 */

/******************************************OTROS METODS DE MANIPULACION 3***************************************************
 * push(): Agrega uno o más elementos al final de un arreglo.
 * let numeros = [1, 2, 3];
 * pop(): Elimina el último elemento de un arreglo y lo devuelve.
 * let numeros = [1, 2, 3];
 * shift(): Elimina el primer elemento de un arreglo y lo devuelve.
 * let numeros = [1, 2, 3];
 * unshift(): Agrega uno o más elementos al principio de un arreglo.
 * let numeros = [2, 3];
 * filter(): Crea un nuevo arreglo con los elementos que pasan una condición especificada en una función. Traeme todos los numeros impares de este array
 * let numeros = [1, 2, 3, 4, 5];
 * slice(): Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo objeto seleccionado desde inicio hasta fin (fin no incluido). El arreglo original no se modificará.
javascript
let numeros = [1, 2, 3, 4, 5]; // elimina el ultimo numero y trae los demas
 * reduce(): Aplica una función a un acumulador y a cada elemento del arreglo (de izquierda a derecha) para reducirlo a un solo valor.
let numeros = [1, 2, 3, 4, 5]; /

 */

/********************************************OTRAS PROPIEDADES DE JS 3********************************************
 * Try cacht, haz un ejercicio, es para capturar y manejar errores
  Supongamos que queremos dividir dos números ingresados por el usuario y mostrar el resultado, pero queremos manejar cualquier error que ocurra si el usuario ingresa un valor no válido o si la división por cero ocurre:


 * Destructuracion : a destructuración es una característica de JavaScript que permite descomponer o extraer valores de objetos o arreglos en variables individuales de una manera más concisa y legible.

  Destructuración de Arreglos:
let [variable1, variable2, ...resto] = arreglo;
let numeros = [1, 2, 3]; // saca el primer y el segundo numero

Destructuración de Objetos:
let { propiedad1, propiedad2 } = objeto;
let persona = { nombre: "Juan", edad: 30 }; // saca la edad y el nombre del

 */

/********************************************Parámetros REST & Operador Spread 3********************************************
 * Parámetros REST (...):
El Parámetro REST (...) permite a una función aceptar un número variable de argumentos como un array. Esto significa que puedes pasar un número variable de argumentos a una función y acceder a ellos a través de un array dentro de la función.
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
total es el numero acumulado y num es el resultado actual a mostrar, el cero solo es numero opcional del num en caso de que no tengamos un numero

console.log(sumar(1, 2, 3, 4, 5)); // Output: 15
console.log(sumar(10, 20));   

*Operador Spread (...):
El Operador Spread (...) se utiliza para descomponer un array en elementos individuales. También se puede utilizar para combinar múltiples elementos en un array.
no hace falta fora=each ni reduce
Ejemplo:
javascript
Copy code
let numeros = [1, 2, 3];
let masNumeros = [4, 5, 6];

let todosLosNumeros = [...numeros, ...masNumeros];

console.log(todosLosNumeros); // Output: [1, 2, 3, 4, 5, 6]
En este ejemplo, el operador Spread se utiliza para combinar los arrays numeros y masNumeros en un único array todosLosNumeros.

Ejercicios:

REST...
* Crea una función llamada maximo que acepte un array de números como argumento y devuelva el número máximo.
hazlo con foREach y con reduce

SPREAD
* Define una función llamada unirArrays que tome dos o más arrays como argumentos y devuelva un único array que contenga todos los elementos de los arrays proporcionados.


 */

/********************************************PROTOTIPOS 3********************************************

En JavaScript, los prototipos son un mecanismo fundamental para la herencia y la compartición de propiedades y métodos entre objetos. Cada objeto en JavaScript tiene un prototipo, que es un objeto del cual hereda propiedades y métodos. Los prototipos permiten crear relaciones entre objetos de una manera eficiente y flexible.

// Definición del constructor del prototipo "Persona"
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototipo "Persona"
Persona.prototype.saludar = function() {
  console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
}

* crea una funcion persona y agregale dos parametros nombre y edad y llamalo con this y despues crea una nueva instancia de persona, se llamara persona1 
despues crea un prototipo persona que se llama suludar que salude con los datos puestos en persona1

 */

/**
 * ****************************************************CLASES 3**************************************
 * En JavaScript, las clases son una forma de definir objetos y estructurar la lógica de programación de manera más organizada y orientada a objetos. Las clases permiten crear plantillas reutilizables para la creación de objetos con propiedades y métodos comunes.

Características de las Clases en JavaScript:
Sintaxis más clara: Las clases proporcionan una sintaxis más clara y orientada a objetos que las funciones constructoras y los prototipos.

Herencia: Las clases admiten la herencia, lo que permite que una clase hija herede propiedades y métodos de una clase padre.

Encapsulamiento: Las clases pueden definir métodos y propiedades privadas utilizando convenciones de nombres (aunque JavaScript no tiene verdaderamente soporte nativo para propiedades privadas).

Ejemplos de Clases en JavaScript:

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let persona1 = new Persona('Juan', 30);
let persona2 = new Persona('María', 25);

persona1.saludar(); // Output: ¡Hola! Soy Juan y tengo 30 años.
persona2.saludar(); // Output: ¡Hola! Soy María y tengo 25 años.

Ejemplo 2: Herencia con Clases
class Animal {
  constructor(especie, color) {
    this.especie = especie;
    this.color = color;
  }

  sonido() {
    console.log('Haciendo sonidos...');
  }
}

class Perro extends Animal {
  constructor(raza, color) {
    super('Perro', color); // Llamada al constructor de la clase padre
    this.raza = raza;
  }

  sonido() {
    console.log('¡Guau!');
  }
}

let perro = new Perro('Labrador', 'Marrón');
perro.sonido(); // Output: ¡Guau!
console.log(perro.especie); // Output: Perro
console.log(perro.raza); // Output: Labrador
console.log(perro.color); // Output: Marrón


*Ejercicios de Clases en JavaScript:
*crea una clase Animal que tenga especie, raza y colo y crea dentro del contructor un this.info que tenga la informacion del animal y crea un metodo verInfo fuera del contructor que muestre this.info

* Ejercicio 1: Crear una Clase "Rectangulo"
Crea una clase llamada "Rectangulo" que tenga propiedades de ancho y alto. Agrega métodos para calcular el área y el perímetro del rectángulo.

* Ejercicio 2: Crear una Clase "Estudiante"
Crea una clase llamada "Estudiante" que tenga propiedades de nombre, edad y grado. Agrega métodos para mostrar la información del estudiante y para promover al siguiente grado.



 */

/*----------------------------------------------------SPLIT 3------------------------------------------------------------- 

Split - es un metodo divisor de letras, ya sea por separado , por comas o cualquier cosa que le pongamos y luego nos trae un array

let cadena = 'manzana,naranja,uva';
let frutas = cadena.split(',');

console.log(frutas); // Output: ['manzana', 'naranja', 'uva']

let texto = 'Hola mundo cómo estás';
let palabras = texto.split(' ');
console.log(palabras); // Output: ['Hola', 'mundo', 'cómo', 'estás']

let palabra = 'JavaScript';
let letras = palabra.split('');
console.log(letras); // Output: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

Ejercicios de split() en JavaScript:
Ejercicio 1: Dividir una cadena por punto y coma
Dada la cadena 'manzana;naranja;uva', utiliza el método split() para dividirla en un array donde cada elemento sea una fruta.

Ejercicio 2: Dividir una cadena por líneas
Dada la cadena multi-línea:
JavaScript
es
genial
Utiliza el método split() para dividirla en un array donde cada elemento sea una línea.

*/

/*
----------------------OPERADORES 8-------------------

1.-Operdores de asignacion: asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

a) crea una variable asignale un numero, despues llama de nuevo esta variable y sumale +=5 y muestra el resultao 5
b) lo mismo con la resta; 5
c) lo mismo con la multiplicacion; 5
d) lo mismo con la division; 5
e) lo mismo con el resto -> ten encuenta que el resto lo conseguimos al numero mas cercano hacia abajo del numero divido, nos muestra el resto de una division. 5


2.- Operdores aritmeticos: toman valores numericos ya sean literales o variables como sus operandos y retornan un valor numerico unico

a) crea una variable y asignale un valor numerico y despues restale con este operador -- y luego muestralo en una varibale y lo muestras; 5
b) haslo mismo con la suma 5
c) divide dos numeros con variables diferentes. 5
d) Divide 10 by 2, and alert the result: 5
e) Alert the remainder(el resto de cuandp 15 es divido entre 9) when 15 is divided by 9. 5

3.- Operadores de comparacion 
a) compara dos valores usando && 5
b) el mismo ejemplo pero despues retornando un valor 5


3.- Operaciones de comparacion 1
son los que devuelven un resultado buleano. 5
a) compara un texto si es igual al otro 5
b) compara si un texto es  diferente a otro. 5
c) compâra si un texto es diferente a otro comparando con el mismo tipo de dato 5
d) compara si un numero es menor al otro 5
e) compara si la dimencion de un texto es mayor al otro 5
f) compara dos valores un verdadero y otro falso con ||, ten encuenta que este operador coge el valor verdadero a diferencia de && que returna falso si tana solo un valor es falso. 5
g) Con el operador correcto devuelve el valor direfente al que imprimes (true or false) 5
 */

/**


---------------------TYPOS DE DATOS 8-------------------------------

- Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra  5
- una alerta con el resultado de la suma. 5

- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. 5 (°C × 9/5) + 32 = °F
- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 5
- Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. 5

 */

/**

/**
 * ---------------------------------------ARRAYZ 8----------------------------------------
 * 1.-crea un array de tres frutas, anhade una fruta y se posiciona en la ultima posicion, otra fruta que se posicione en la primera posicion, cambia el valor del tercer array, elimina el primer array, elimina el ultimo array. 4
 * 2.- En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo. 4
 * 3.-
 */

/**
 * --------------------------------------LOOPS 8------------------------------------------
 * 1.-Cuenta los numeros hasta 10 for 4
 * 2.- has funcion que salude a los estudiantes. 4
 * 3.- lo mismo pero con for of 4
 * 4.- ejercuta un numero con while 4
 * 5.- saluda a estudiantes con  while 4
 * 6.- hacer lo mismo con do while clase numero 20 platzi 4
 * 7- hcrea un ejercicio qu recorra un array con for in y con for  4
 * 8- concate arrais con metodo join con separacion vacia y con separacion con algo un numero o palabra

 
 */

/*
  slice(startIndex, endIndex): La función slice extrae una parte de una cadena y devuelve una nueva cadena. 
  Toma dos parámetros: el índice de inicio (startIndex) y el índice final (endIndex) (este último es opcional). 
  slice extrae desde startIndex hasta endIndex (sin incluir endIndex). Si endIndex no se proporciona, extrae hasta el final de la cadena. 
 * 
 
  replace() en JavaScript se utiliza para reemplazar parte de una cadena por otra y devuelve una nueva cadena con los reemplazos realizados.
Su sintaxis es la siguiente: cadena.replace(valorAnterior, valorNuevo)
 * 
*null quiere decir que es valor que hemos inicializado pero no llega todavia, en cambio undefine es un valor asignado por javascript que todo no hhay ningun valor inicializado

Math El objeto Math en JavaScript proporciona constantes y métodos para realizar operaciones matemáticas. 
Contiene propiedades y métodos estáticos que no son instancias de un objeto Math, por lo que se accede directamente al objeto Math en sí mismo. 
Math.round(x): Redondea x al entero más cercano.
Math.floor(x): Redondea hacia abajo al entero más cercano.
Math.ceil(x): Redondea hacia arriba al entero más cercano.


 * 
 * 1. escribe una variable saludo que contenga hola que tal, indica en que posicion se encuenta la letra o,
 * 2. lo mismo pero ahora con la letra l, y tambien intenta con una palabra 'que'
 * 3. Crea un array de colores y haz un funcion que retorne el color azul y si no lo encuentra que diga este color no se encuentra
 * 3.-Escribe la palabra Javascript y devuelve solo java, y despue aparte tambien devuelve el script
 * 4.-crea un array de numeros, y haz una funcion que traiga los numeros que se encuentran desde el segundo hasta el quito numero

 * 2. lo mismo pero ahora con la letra l, y tambien intenta con una palabra 'que' indexof
 * 3.-Escribe la palabra Javascript y devuelve solo java, y despue aparte tambien devuelve el script slice
 * 4.- Replaza Hola mundo con Hola amigo
 * 5. Calcula la raiz cuadrada de 8 con el metodo correcto
 * 6.- Escribe una función que tome un número como entrada, calcule la raíz cuadrada de ese número y devuelva el resultado redondeado hacia abajo y hacia arriba.
 * 7.- Crea un perfil de redes sociales donde el usuario tiene, informacion personal dale slice en el nombre, direccion, y sus hoobies, la direccion es un objeto, hoobies array,
 * 8.- 


 
 */
/**
 * --------------------------------------FUNCIONES------------------------------------------
 * 1*- combinar funciones y condicionales, crear una funcion que como parametro recibe la suscripcion que queramos ver si existe, curso practico 8
 const tipodeSuscripciones = {
  Free:"Solo puedes tomar los cursos gratis",
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
 } 

 2*- crea una conversacion con prompt donde el usuario le pregunta a al profesor como esta, y le responde que bien, y luego le pide que si le puede dar una lista de estudiantes,
 y le responde que, despues hago un for o for of a la lista de estudiantes habiendo creado esta lista previamente

 */

/**
 * --------------------------------------OBJETOS 8------------------------------------------
 * 1.-Hacer un objeto de un auto; 3
 * 2.- crea una clase animal con un constructor que tenga 5 animales diferentes
 * 3.- crea un funcion dentro del objeto que retorne la informacion que se encuentra dentro del objeto. 3
 * 4.- despues crea una funcion dentro de la clase que retorne la informacion de los animales, pero no te olvides de crear un metodo this.info que recaude informacion

 */

/**
 * -------------------------------------OBJETO2 6--------------------------------------------
 * crea un objeto de perfil de un usurio y solo muestra, los values de este objeto, en otra parte muestra las kays de este objeto
 * muestra los valores de este objeto atraves de unos corchetes
 */

/**
 * --------------------------------------FUNCIONES 8------------------------------------------
 * -- un escope todo lo que se encuenytra dentro de un objeto o una funcion
 * 1*- combinar funciones y condicionales, crear una funcion que como parametro recibe la suscripcion que queramos ver si existe, curso practico 8
const tipodeSuscripciones = {
  Free:"Solo puedes tomar los cursos gratis",
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"} 3

 */

/*

/* ------------------------------------ADDEVENTLISTENER------------------------------
1.- ahora quitale onclick al button en html y hazlo todo con addeventlistener
2.- ahora hazlo pero con la etiqueta form

 */

/**************************************TRUCOS**********************************
 * Entra en la pagina toptal.com/developers/gitignore para todos los giignore que quieras anhadir
 */
/*

-------------------------------EJERCICIOS GENERALES 6---------------------------------------------------------
*con math random haz un ejercicio que me devuelva de 50 a 100
*Dado el string "Cadena", utiliza un bucle para imprimir cada carácter con charAt.
*Crea una función que reemplace todas las apariciones de la letra "a" en una cadena por "@." con replace
*Reemplaza los números de una cadena con un asterisco usando replace con replace.
*calcula el residuo de 27 entre 6
*calcula la raiz cuadrada de 81
 *Funcion que salude a estudiantes 4
 *Muestra la multipliacion de 2 de forma vertical 4
 *Despues que haz una funcion que pida la tabla de multiplicacion que quiere aplicar 4
 *Enunciado: Declara una variable (diaSemana) que represente un día de la semana (por ejemplo, "lunes", "martes", etc.). Utiliza una estructura de control switch para imprimir un mensaje diferente dependiendo del día. Por ejemplo, para "lunes", imprime "Hoy es lunes". 4
 *Crea un array de nombres y que te traiga tos los nombre que empiencen con la letra A 3 // con filter, con indexOf, Chart, 
 *quiero que diga que azul se encuentra, pero si eso otro color aunque el que este en array que diga que no se encuentra 2
 // map, filter, foreach, primero dublica el array y filtra los numeros mayores a 2, y con foreach console.log el numero filtrado 1
map(), filter(), forEach(): Combinar métodos:
let numeros = [1, 2, 3, 4, 5];
 * filter(): Crea un nuevo arreglo con los elementos que pasan una condición especificada en una función. Traeme todos los numeros impares de este array 1
 * let numeros = [1, 2, 3, 4, 5];
 * slice(): Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo objeto seleccionado desde inicio hasta fin (fin no incluido). El arreglo original no se modificará. 1
javascript
REST...
* Crea una función llamada maximo que acepte un array de números como argumento y devuelva el número máximo.
hazlo con foREach y con reduce 1

SPREAD
* Define una función llamada unirArrays que tome dos o más arrays como argumentos y devuelva un único array que contenga todos los elementos de los arrays proporcionados. 1
 * Try cacht, haz un ejercicio, es para capturar y manejar errores
  Supongamos que queremos dividir dos números ingresados por el usuario y mostrar el resultado, pero queremos manejar cualquier error que ocurra si el usuario ingresa un valor no válido o si la división por cero ocurre:

 * Destructuracion : a destructuración es una característica de JavaScript que permite descomponer o extraer valores de objetos o arreglos en variables individuales de una manera más concisa y legible.

  Destructuración de Arreglos:
let [variable1, variable2, ...resto] = arreglo;
let numeros = [1, 2, 3]; // saca el primer y el segundo numero

Destructuración de Objetos:
let { propiedad1, propiedad2 } = objeto;
let persona = { nombre: "Juan", edad: 30 }; // saca la edad y el nombre del

* prototipo
 crea una funcion persona y agregale dos parametros nombre y edad y llamalo con this y despues crea una nueva instancia de persona, se llamara persona1 
despues crea un prototipo persona que se llama suludar que salude con los datos puestos en persona1
recuerda los prototipos no pueden ser arrow funtion


*Ejercicios de Clases en JavaScript:
*crea una clase Animal que tenga especie, raza y colo y crea dentro del contructor un this.info que tenga la informacion del animal y crea un metodo verInfo fuera del contructor que muestre this.info

* Ejercicio 1: Crear una Clase "Rectangulo"
Crea una clase llamada "Rectangulo" que tenga propiedades de ancho y alto. Agrega métodos para calcular el área y el perímetro del rectángulo.

* Ejercicio 2: Crear una Clase "Estudiante"
Crea una clase llamada "Estudiante" que tenga propiedades de nombre, edad y grado. Agrega métodos para mostrar la información del estudiante y para promover al siguiente grado.



*/

/**

Ejercicios:

 *


























//haciendo

9. includes()
Descripción: Verifica si una cadena contiene una subcadena específica. Devuelve true o false.
Sintaxis: cadena.includes(subcadena)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.includes("Mundo"));  // Devuelve true
Ejercicios:
Verifica si la cadena "JavaScript es increíble" contiene la palabra "increíble".
Crea una función que verifique si un correo contiene un "@".
Dada una lista de palabras, verifica si alguna contiene la letra "e".


3. substring()
Descripción: Extrae una porción de una cadena entre dos índices. El segundo índice es opcional.
Sintaxis: cadena.substring(inicio, fin)
Ejemplo:
javascript
Copy code
let texto = "Hola Mundo";
console.log(texto.substring(0, 4));  // Devuelve "Hola"
Ejercicios:
Extrae la palabra "Java" de la cadena "JavaScript".
Crea una función que, dada una cadena, devuelva los primeros 5 caracteres.
Extrae el dominio de un correo electrónico usando substring.

 */

let cad = "JavaScript";

function sub(params = "") {
  return params.substring(0, 5);
}

console.log(sub(cad));
