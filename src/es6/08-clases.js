//declarando
class User {}
// instancia de una clase
const newUser = new User();

class user {
  // metodos
  greeting() {
    return 'Hello';
  }
}

const joaco = new user();
console.log(joaco.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
  //constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
}

const david = new user();

// this
class user {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const pedro = new user('Pedro');
console.log(pedro.greeting());

// setters getters

class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('Joaquin', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 22);
