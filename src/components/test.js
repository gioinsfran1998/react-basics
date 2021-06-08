// POO

/* 

Clases: modelo a seguir

Objetos: es una instancia de una clase, una copia
  -> Atributos: caracteristicas o propiedaed del objeto (variables dentro del objeto)
  -> Metodos: acciones que un objeto puede realizar (son funciones dentro de un objeto)/


*/

class Animal {
	constructor(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
	}
	// metodos

	saludar() {
		console.log('hola');
	}
}

const mimi = new Animal('mimi', 'hembra');

console.log(mimi);
