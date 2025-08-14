import { pipe } from "lodash/fp";

function greeting() {
  return function () {
    return "Good Morning!";
  };
}

function printMessage(anFunction) {
  console.log(anFunction());
}

let numbers = [1, 2, 3, 4];

numbers = numbers.map((number) => number * 10);
console.log(numbers);

let username = "   Harley   ";
let message = "Hello " + username.trim() + " Good Morning!";

// console.log(message);

const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name} ${message}!`;
const convertToUpper = (name) => name.toUpperCase();
const newFunc = pipe(trim, convertToUpper, generateMessage("Have a nice day"));
const result = newFunc(username);
console.log(result);

function multi(a) {
  return function (b) {
    return a * b;
  };
}

const multiple = (a) => (b) => a * b;

let result1 = multi(2)(5);
