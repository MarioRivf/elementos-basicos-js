/*console.log("Hello World...");
console.log("Este es mi primer comando en JS");
let a, b, c, d, f, e;
//suma 
a = 3 + 4;
console.log(a);
// resta
b = 10 - 5;
console.log(b);
// multiplicacion
c = 2 * 3;
console.log(c);
// division
d = 10 / 2;
console.log(d);
// modulo
f = 10 % 3;
console.log(f);
// potencia (es2016)
e = 2 ** 3;
console.log(e);

// preincremento
++a;
console.log(a);
// postincremento
a++;
console.log(a);
// predecremento
--a;
console.log(a);
// postdecremento
a--;
console.log(a);

// Ejercicio 1 de rango entre numeros
let num1 = 10;
let num2 = 20;
let dato = 5;
if (dato >= num1 && dato <= num2) {
    console.log("El valor ", dato, " esta dentro del rango");
} else {
    console.log("El valor ", dato, " esta fuera del rango");
}

// ejercicio dia de la semana con switch
let dia = 5;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("El dia ingresado no es valido");
}


// ciclo while
let i = 1;
while (i <= 10) {
    console.log('Numero: ${i}');
    i++;
}

// imprimir los primeros 10 numeros pares
let j = 1;
while (j <= 10) {
    console.log(`Numero par: ${j}`);
    j += 2;
}

let k= 0
for (let  k = 1; k<=10; k+=3){
    console.log(`Numero impar: ${k}`);
}

let x = 1
do {
    console.log(`Numero: ${x}`);
    x+=3
} while (x <= 10)

let y = 1
do {
    if (y == 1) {
        console.log(`Numero par: ${y}`);
        y++
    } else {
        console.log(`Numero impar: ${y}`);
        y+=3
    }
} while (y <= 10)

for (let z = 1; z >= -10; z-=3){
    console.log(`Numero: ${z}`);
}

let nombre = 'Juan'
let apellido = 'Perez'
let saludo = `Hola ${nombre} ${apellido}`
console.log(saludo)

let maximo = 5, acumuladorSuma = 0;
for (let i = 1; i <= maximo; i++){
    acumuladorSuma += i;
}
console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`);

let acumuladorMultiplicacion = 1;
for (let i = 1; i <= maximo; i++){
    acumuladorMultiplicacion *= i;
}
console.log(`La multiplicacion de los primeros ${maximo} numeros es: ${acumuladorMultiplicacion}`);

let contador = 0;
while (contador <= 10){
    console.log(`Contador: ${contador}`);
    contador++;
};

let max = 10;
let acumulador2 = 0;
let ii = 1; 
do {
  acumulador2 += ii;
  console.log(`Acumulador: ${acumulador2}`);
  ii++
}while ( acumulador2 <= max);
console.log(`La suma de los primeros ${max} numeros es: ${acumulador2}`);

// funcion recursiva
function recursiva(numero){
    if (numero == 0){
        return 0;
    } else {
        console.log(`Numero: ${numero}`);
        return numero + recursiva(numero - 1);
    }
}
recursiva(5);

let a = "hola mundo";
let b = a.substring(5, 10);
console.log(b);

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    email: "juan@gmail.com",
    direccion: "Calle 123",
    telefono: "1234567890",
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
console.log(persona.nombreCompleto());

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    email: "juan@gmail.com",
    direccion: "Calle 123",
    telefono: "1234567890",
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}
console.log(persona1.nombreCompleto);

// get es una funcion que se usa para obtener un valor de un objeto
// set es una funcion que se usa para asignar un valor a un objeto

persona1.lang = "us";
console.log(persona1.lang);

// metodo constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
let persona2 = new Persona("Juan", "Perez", "juan@gmail.com");
console.log(persona2);\*/

// creacion de un objeto con una funcion y crear otro objeto llamando la funcion call

let persona3 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@gmail.com",
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
let persona4 = {
    nombre: "Mario",
    apellido: "Perez",
    email: "juan@gmail.com",
}
console.log(persona3);
console.log(persona3.nombreCompleto.call(persona4));


let persona5 = {
    nombre: "Mario",
    apellido: "Perez",
    email: "juan@gmail.com",
    nombreCompleto: function(titulo, tel){
        return `${titulo} ${this.nombre} ${this.apellido} ${tel}`;
    }
}
console.log(persona5.nombreCompleto("Licenciado", "1234567890"));
console.log(persona5.nombreCompleto.call(persona3, "Licenciado", "1234567890"));

console.log(persona5.nombreCompleto.apply(persona3, ["Licenciado", "1234567890"]));