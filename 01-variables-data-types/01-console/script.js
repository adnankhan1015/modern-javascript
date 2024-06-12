// Now we can show the stuff on the console with the console object in JavaScript

//
/*
! MultiLine comment
* console.log(100);

? console.log("Hello World");

TODO: console.log(20, "Hello", true);
*/

const x = 100;

console.log(x);

console.error("Alert");

console.warn("warning");

console.table({ name: "Adnan", email: "adnan@gmail.com" });

console.group("Simple");
console.log(x);
console.error("Alert");
console.warn("warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cHello World", styles);
