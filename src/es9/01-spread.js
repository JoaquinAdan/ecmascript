const user = { username: 'joaco', age: 24, country: 'AR' };
const { username, ...values } = user;
console.log(username);
console.log(values);
