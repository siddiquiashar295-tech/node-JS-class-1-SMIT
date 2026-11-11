console.log("Hello World");

let name = "Ali";
let age = 20;

console.log("My name is " + name);
console.log("My age is " + age);

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiply:", a * b);
console.log("Division:", a / b);


let password = "Ali12345";

if (password.length >= 8) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}




let numbers = [10, 50, 90, 20, 70];

let max = numbers[0];

for (let num of numbers) {
    if (num > max) {
        max = num;
    }
}

console.log("Maximum:", max);





let cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

let total = 0;

cart.forEach((item) => {
    console.log(item.name, item.price);
    total += item.price;
});

console.log("Total Bill:", total);