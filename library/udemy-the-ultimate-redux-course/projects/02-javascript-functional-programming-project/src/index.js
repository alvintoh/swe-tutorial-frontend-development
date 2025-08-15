import { produce } from "immer";
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

const employee = {
  name: "Harley",
  age: 22,
  company: {
    country: "Canada",
    city: "Toronto",
  },
};
// const newEmployee = Object.assign({}, employee, { name: "Martin" });
// const newEmployee = {
//   ...employee,
//   name: "Martin",
//   company: {
//     ...employee.company,
//     city: "Calgary",
//   },
// };
const newEmployee = produce(employee, (draftState) => {
  draftState.name = "Martin";
  draftState.company.city = "Calgary";
});

console.log(employee);
console.log(newEmployee);

const numbersArray = [10, 20, 30, 40];

// Adding Items
const addedNumbers = [...numbersArray, 50, 60];
console.log(addedNumbers);

const index = numbersArray.indexOf(30);
const slicedNumbers = [
  ...numbersArray.slice(0, index),
  50,
  ...numbersArray.slice(index),
];
console.log(slicedNumbers);

// Updating Items
const updatedNumbers = numbers.map((a) => (a === 40 ? 80 : a));
console.log(updatedNumbers);

// Removing Items
const removedNumbers = numbers.filter((a) => a !== 30);
console.log(removedNumbers);

const book = {
  author: "Robert Kiyosaki",
  book: {
    name: "Rich Dad Poor Dad",
    price: "$8",
    rating: 4.7,
  },
};

const arrayOfBooks = ["Book1", "Book2", "Book3"];

// const updatedBook = {
//   ...book,
//   book: {
//     ...book.book,
//     price: "$10",
//     rating: 4.8,
//   },
// };

const newBook = produce(book, (draftState) => {
  draftState.book.price = "$10";
  draftState.book.rating = 4.8;
});

console.log(newBook);

const updatedArrayOfBooks = arrayOfBooks.map((book) =>
  book === "Book2" ? "Book4" : book
);

console.log(updatedArrayOfBooks);
