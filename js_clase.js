// clase 1
class Persona {
    static contadorPersonas = 0;
    email = "email@gmail.com";
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.id_persona = ++Persona.contadorPersonas;
            console.log(`Se ha creado una nueva persona: ${Persona.contadorPersonas}`);
            return;
        }
        else {
            console.log("Se ha superado el maximo de objetos permitidos");
        }
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    nombreCompleto() {
        return `id: ${this.id_persona} Nombre: ${this._nombre} Apellido: ${this._apellido}`;
    }

    toString() {
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Hola");
    }

    static saludar2(persona) {
        console.log(`Hola ${persona._nombre} ${persona._apellido}`);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    nombreCompleto() {
        return `${super.nombreCompleto()} Departamento: ${this._departamento}`;
    }
}

let persona1 = new Persona("Juan", "Perez");
let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
let empleado2 = new Empleado("Carlos", "Lara", "Sistemas");
let empleado3 = new Empleado("Ana", "Martinez", "Sistemas");
let empleado4 = new Empleado("Luisa", "Gomez", "Sistemas");
let empleado5 = new Empleado("Miguel", "Hernandez", "Sistemas");
let empleado6 = new Empleado("Elena", "Ramirez", "Sistemas");

console.log(persona1.toString());
console.log(empleado1.toString());  
console.log(empleado6.toString());

/*
let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");

console.log(empleado1.nombre);
console.log(empleado1.departamento);

empleado1.departamento = "contabilidad";

console.log(empleado1.departamento);

let persona1 = new Persona("Juan", "Perez");

console.log(persona1.nombre);

persona1.nombre = "Carlos";

console.log(persona1.nombre);

console.log(persona1.nombreCompleto());

console.log(empleado1.nombreCompleto());

console.log(persona1.toString());
console.log(empleado1.toString());

Persona.saludar();

Empleado.saludar2(empleado1);

console.log(Persona.contadorPersonas);

let persona3 = new Persona("Ana", "Gomez");

console.log(Empleado.contadorPersonas);

console.log(persona3.email);

persona3.email = "ana.gomez@gmail.com";

console.log(persona3.email);

console.log(empleado1.email);

empleado1.email = "juan.perez@gmail.com";

console.log(empleado1.email);

console.log(persona3.email);

*/