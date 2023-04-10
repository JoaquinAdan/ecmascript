function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}
let array = ['Oscar', 'David', 'Joaquin', 'Victoria', 'Ulises'];
const it = iterate(array);

array.map(() => console.log(it.next().value));
console.log(it.next().value);
