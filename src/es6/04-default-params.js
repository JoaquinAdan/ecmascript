function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'Argentina';
  console.log(name, age, country);
}

newUser();
newUser('Fernando', 16, 'Puerto rico');

const newUser = (name = 'Joaquin', age = 24, country = 'Aregentina') => {
  console.log(name, age, country);
};

newUser();
newUser('Victoria', 24, 'Argentina');
