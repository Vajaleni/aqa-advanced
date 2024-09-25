const person = {
  firstName: "Ivan",
  lastname: "Ivanov",
  age: 25,
};

person.email = "ivanov.mail.com";
delete person.age;

console.log(person);
