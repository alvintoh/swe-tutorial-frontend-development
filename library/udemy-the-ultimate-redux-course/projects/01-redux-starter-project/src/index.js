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

console.log(message);

const trim = (name) => name.trim();
const generateMessage = (name) => `Hello ${trim(name)} Good Morning!`;
const convertToUpper = (name) => name.toUpperCase();

const result = generateMessage(convertToUpper(trim(username)));
console.log(result);
