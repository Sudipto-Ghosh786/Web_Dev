/*
    Types of Variables :-
    1. var (global scope)
    2. let (block scope)
    3. const
*/

var age = 20;
const NUM = 10;
const obj = {
    x: 10,
    y: 20
};

console.log(age); // printing the value of variable
console.log(NUM);
console.log(obj);

{
    let age = 33
    console.log('Inside the Scope :- ' + age)
}



/* Functions */

function add(x, y, z) {
    return x + y + z;
}

console.log(add(10, 20, 30));


/* AS - 1, Simle Interest */

function calculateSimpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

function sum(x, y) {
    return x + y;
}

let s1 = calculateSimpleInterest(10, 20, 30);
let s2 = calculateSimpleInterest(20, 30, 40);

console.log("Sum of SIs :- " + sum(s1, s2));

