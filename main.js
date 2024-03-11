/**
 * ---------------------------------DEBES APRENDER ESO-----------------------------------------------------
 * Fundamentos:

Sintaxis básica: Variables, tipos de datos, operadores, estructuras de control (if, else, for, while, etc.)
Funciones: Definición, tipos de funciones, parámetros, ámbito
Objetos: Creación, propiedades, métodos
Arreglos: Métodos de manipulación, iteración
Programación orientada a objetos:

Clases: Creación, herencia, métodos
Módulos: Importación y exportación de módulos
Programación asíncrona:

Promesas: Uso de promesas para manejar operaciones asíncronas
Async/await: Uso de async/await para simplificar el manejo de código asíncrono
DOM (Document Object Model):

Manipulación del DOM: Seleccionar elementos, modificar estilos, agregar eventos
 * 
 * -------------------VARIABLES 8-------------------

1.Create a variable called carName, assign the value Volvo to it. 5
2.Create a variable called x, assign the value 50 to it. 5
3. Muestra la suma de dos variables con getelmentby.... 5
4.Create a variable called z, assign x + y to it, and display the result in an alert box. 5
5.On one single line, declare three variables with the following names and values: 'ondo' 'edu' 30 5


/**
 * ---------------------------------------VARIABLES 2---------------------------------------------------
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
 * ---------------------------------------OPERADORES 1---------------------------------------------------
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
 * ---------------------------------------ESTRUCTURA DE CONTROL 1---------------------------------------------------
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
 * ---------------------------------------TIPOS DE FUNCIONES---------------------------------------------------
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
 * ***************************************FUNCIONES AMBITO GLOBAL Y LOCAL*******************************************
 * Ámbito global vs. ámbito local:

Enunciado: Declara una variable mensaje fuera de una función. Luego, dentro de una función llamada saludar, declara una variable con el mismo nombre. Imprime el valor de ambas variables dentro y fuera de la función. Observa cómo el ámbito local de la variable dentro de la función afecta su visibilidad y valor.

Modificación de variable global dentro de una función:

Enunciado: Declara una variable global contador con un valor inicial de 0. Crea una función llamada incrementarContador que incrementa el valor de contador en 1. Llama a la función y luego imprime el valor de contador. Observa cómo la función modifica la variable global y cómo el cambio persiste fuera de la función.

Ámbito léxico:

Enunciado: Define una función externa llamada externa que declare una variable mensaje con un valor dentro de ella. Dentro de externa, define otra función llamada interna que imprima el valor de mensaje. Llama a la función interna desde dentro de externa. Observa cómo la función interna puede acceder a la variable definida en su función externa, demostrando el concepto de ámbito léxico.
 */

/**
 /**
 * ***************************************PROPIEDADES*******************************************
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
 * ***************************************METODOS*******************************************
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
 *----------------------TEMPLATE STRING 8-----------------------------

1. Concate dos frases 5
2. crea dos promt y concatena las frases, 5
3. usa las comillas invertidas y ponle un div y anhadele una lista desordenada 5





---------------------TYPOS DE DATOS 8-------------------------------

- Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra  5
- una alerta con el resultado de la suma. 5

- Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. 5 (°C × 9/5) + 32 = °F
- Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5 5
- Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. 5

 */

/**
 * --------------------------------------CONDICIONALES 8 -------------------------------
 * 1.- Hacer un ejercicio con if else si tiene menos de 18 anhos no puede votar y si tiene 18  puede votar y si tiene mas de 18 puede votar y conducir. 5
 * 2.- Has un ejemplo que al seleccionar el tipo de clima te muestra unas ecrituras, tengo hacer un select y coger una p desde el html 5
 * 3.- Hacer un ejercicio con switch 5
 * 4.- Hacer un ejercicio de tres jovenes que compran helados dependiendo la cantidad de dinero que tienen, el program les indica el . utilizando >= 5
 * 5.- hacer un ejercicio con while y dile que cuando el numero llegue a 31 deje de ejecutarse 5
 * 6.- haz lo mismo con el do while 5
 * 7.- haz un ejercicio con while qu cada numero que va llgando que cuente una historia de tu vida 5
 * 8.- intenta hacer lo mismo con un for o un while con una funcion pero la historia viene dentro de un objeto y cada vez qu llegue al numero  5
 */

/**
 * ---------------------------------------ARRAYZ 8----------------------------------------
 * 1.-crea un array de tres frutas, anhade una fruta y se posiciona en la ultima posicion, otra fruta que se posicione en la primera posicion, cambia el valor del tercer array, elimina el primer array, elimina el ultimo array. 4
 * 2.- En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo. 4
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

/**
 * --------------------------------------STRING 8 METHOD--------------------------------------------
 * charAt(index): Esta función devuelve el carácter en la posición específica de una cadena. 
 * El índice (index) es un número entero que representa la posición del carácter que se desea obtener
 
 * 
 *indexOf(searchValue, startIndex): La función indexOf busca la primera ocurrencia de un valor especificado (searchValue) dentro de una cadena. 
  Si lo encuentra, devuelve el índice de la primera aparición. Puedes especificar opcionalmente un índice inicial (startIndex) desde donde comenzar la búsqueda. 
  Si no se encuentra el valor, devuelve -1.
  busca en que posicion se encuentra una palabra que buscas


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

/**
 * --------------------------------------METODOS ARRAY 5------------------------------------------
 * 1.-El metodo filter te crea un nuevo array no modifca el principal, ejer: Crear un array tipo objeto articulos del coste y nombre de un producto, filtra articulos de menos de 500, 2
 * 2.- .filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array. 2
.map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. ejer; hacerlo mismo con el map estq vez solo filtrar los nombres de los articulos y ver la diferencia 2

Teorias: Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter: 2

El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz. 2

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz. 2

 * 3.- con find filtrar articulo de nombre laptop 2
 * 4*- foreach me modifica el mismo array llamado,ejer: filtra el nombre de los articulos,no necesita una variable como los demas 2
 */

/*

/**
 * --------------------------------------FUNCIONES PLATZI 5------------------------------------------
*Calcula el desscuento de un 20% cuando una camiseta cuesta 8000
 */

/*


 */

/* ------------------------------------ADDEVENTLISTENER------------------------------
1.- ahora quitale onclick al button en html y hazlo todo con addeventlistener
2.- ahora hazlo pero con la etiqueta form

 */

/**************************************TRUCOS**********************************
 * Entra en la pagina toptal.com/developers/gitignore para todos los giignore que quieras anhadir
 */

/*


=======
 *Calcula el desscuento de un 20% cuando una camiseta cuesta 8000

=======
 *






Estructura do-while:

Enunciado: Utiliza una estructura de control do-while para pedir al usuario que ingrese un número mayor que 10. Si el número ingresado es menor o igual a 10, sigue pidiendo al usuario que ingrese un número hasta que cumpla con la condición.

Estos ejercicios te ayudarán a practicar y comprender mejor las estructuras de control en JavaScript, incluyendo if-else, switch, for, while y do-while.
 */





