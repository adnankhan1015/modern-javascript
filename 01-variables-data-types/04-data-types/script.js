/*
    ! 1. Primitive/Value Data Types
    ! 2. Reference Types (Objects) 
    * Reference Types or "Objects" are a non-primitive value and when assigned to a variable the variable is given a reference to that value.
    * Object literals
    * Arrays
    * Functions
    are all reference types.
*/

// String

const firstName = "Sara";

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null => Is an intentional empty value
const aptNumber = null;

// undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9007199254740991n;

// Reference Type
const numbers = [1, 2, 3, 4];

const person = { name: "John" };

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
