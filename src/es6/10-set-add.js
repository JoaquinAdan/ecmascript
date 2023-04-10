// agregando valores al set
const list = new Set();
list.add('item 1');
list.add('item 2').add('item 3');

// Mostrando los valores del set
console.log(list);

// Verificando si un valor existe en el set
console.log(list.has('Edgar'));

// Elimnando un valor del set
list.delete('Perro');

// Mostrar el tamaño del set
console.log(list.size);
