// // For Loop Example
// for (let i = 0; i < 5; i++) {
//     console.log(`For Loop Iteration: ${i}`);
// }

// let fruits = ['banana', 'mango']

// for (let i = 0; i< fruits.length; i++) {
//     console.log(fruits[i])
// }

// // While Loop Example
// let count = 0;
// while (count < 5) {
//     console.log(`While Loop Iteration: ${count}`);
//     count++;
// }


// Array Techniques in JavaScript

let numbers = [1, 2, 3, 4, 5];

// forEach - Iterates over each element
numbers.forEach(num => console.log(`forEach: ${num}`));

numbers.forEach((num) => {
    if (num % 2 == 0) {
        // alert(`${num} is an even number`)
    }
})

// map - Creates a new array by applying a function to each element
let squared = numbers.map(num => num * num);
console.log(`map: ${squared}`);

let oddNumbers = numbers.map(num => num +1)
alert(oddNumbers)

// filter - Creates a new array with elements that pass a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`filter: ${evenNumbers}`);

// reduce - Reduces the array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`reduce: ${sum}`);

// find - Finds the first element that satisfies a condition
let firstEven = numbers.find(num => num % 2 === 0);
console.log(`find: ${firstEven}`);

// some - Checks if at least one element satisfies a condition
let hasNegative = numbers.some(num => num < 0);
console.log(`some: ${hasNegative}`);

// every - Checks if all elements satisfy a condition
let allPositive = numbers.every(num => num > 0);
console.log(`every: ${allPositive}`);

// JavaScript Objects

// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

// Accessing object properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// Modifying object properties
person.age = 31;
console.log(person.age); // 31

// Adding new properties
person.nationality = "American";
console.log(person.nationality); // American

// Deleting properties
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// Nested object access
console.log(person.address.city); // New York

// Calling object methods
person.greet(); // Hello, my name is John Doe

// Looping through object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys - Get an array of keys
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "hobbies", "address", "greet", "nationality"]

// Object.values - Get an array of values
console.log(Object.values(person)); 

// Object.entries - Get an array of key-value pairs
console.log(Object.entries(person));



