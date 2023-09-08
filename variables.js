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

/* Argument Keyword */

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(10, 20, 30, 40, 50, 60, 70, 80, 90));

/* Function Expression */
let functionExpression = function(x, y) {
    return x + y;
}
console.log(functionExpression(20, 30, 40));

/* Arrow Function */
let arrowFunctionExpression = (x, y) => x + y;
console.log(arrowFunctionExpression)


/* Constructor Function */
function Employee(name, age, dept) {
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.getAge = function() {
        return this.age;
    }
    this.printData = function() {
        return this.name + ' ' + this.age + ' ' + this.dept;
    }
}

// Creating the objects
let employee = new Employee('Pizza', 23, 'Development');
console.log('Constructor Function: ' + employee.printData());



/* AS - II */

function Student(name, age, gender) {
    this.student_name = name;
    this.student_age = age;
    this.student_gender = gender;


}

let student1 = new Student("Pizza", 13, "Male");
let student2 = new Student("Burger", 2, "Female");
let student3 = new Student("Johnny", 2, "Male");


console.log("Student - 1 Name :- " + student1.student_name);
console.log("Student - 2 Name :- " + student2.student_name);
console.log("Student - 3 Name :- " + student3.student_name);



console.log("Student - 1 Age :- " + student1.student_age);
console.log("Student - 2 Age :- " + student2.student_age);
console.log("Student - 3 Age :- " + student3.student_age);



console.log("Student - 1 Gender :- " + student1.student_gender);
console.log("Student - 2 Gender :- " + student2.student_gender);
console.log("Student - 3 Gender :- " + student3.student_gender);



Student.prototype.branch = "CSE";
Student.prototype.college = "ABC";

console.log("Student - 1 Branch :- " + student1.branch);
console.log("Student - 2 Branch :- " + student2.branch);
console.log("Student - 3 Branch :- " + student3.branch);


console.log("Student - 1 College :- " + student1.college);
console.log("Student - 2 College :- " + student2.college);
console.log("Student - 3 College :- " + student3.college);






