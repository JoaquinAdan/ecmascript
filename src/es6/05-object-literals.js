// enhaced object litearals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser('Joaquin', 24, 'Argentina', 1));
