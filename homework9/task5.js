const users = [
  { name: "Valentina", age: 20, email: "tur@mail.com" },
  { name: "Oleksandr", age: 23, email: "row@mail.com" },
  { name: "Olena", age: 45, email: "mope@mail.com" },
];
for (let user of users) {
  let { name, age, email } = user;

  console.log(`Name: ${name}, Age: ${age}, Email: ${email}, `);
}
