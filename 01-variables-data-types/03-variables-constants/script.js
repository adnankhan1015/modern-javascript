/*
 * ways to declare a variable
 * var, let, const
 */

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age);

//  Naming Conventions

// - Can not start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assiging variables

age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}
console.log(score);

const x = 100;

// x = 200;

let sport;

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: "John",
  age: 32,
  address: "address",
};

person.name = "Marry";

person.email = "marry@gmail.com";

console.log(person);

// Declare multiple values at once

let a, b, c;
const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
