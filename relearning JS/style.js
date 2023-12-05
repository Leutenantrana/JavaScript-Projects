alert("Script is commected!!");

// Do --While statement
let i = 0;
do {
    if (i % 3 == 0)
        console.log("Multiple of three" + i);
    i++

} while (i < 500);

let j = 0
let k = 0;

// While Statement!!

let n = 0;
let x = 0;
while (n < 2) {
    n++;
    x += n;
    console.log(x);
}

// "LABEL TO BREAK THE WHILE LOOP"

outerLoop: for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i === 2 && j === 2) {
            break outerLoop;
        }
        console.log(`i: ${i}, ${j}`);
    }
}

let y = 0;
let z = 0;
labelCancelLoop: while (true) {
    console.log("Outer loops :", y);
    y += 1;
    z = 1;

    while (true) {
        console.log("inner loop :", z);
        z += 1;
        if (z === 10 && y === 10) {
            break labelCancelLoop;
        } else if (z === 10) {
            break;
        }
    }
}

// Continue Statements

// continue;
// continue label;

let A = 0;
let B = 0;
while (A < 6) {
    A += 1;
    if (A === 4) {
        continue;
    }
    B += A;
    console.log(B);


}

// Continue example 2


let q = 0;
let p = 10;

checkpandq: while (q < 4) {
    console.log(q);
    q += 1;
    checkp: while (p > 4) {
        console.log(p);
        p -= 1;
        if (p % 2 === 0) {
            continue checkp;
        }
        console.log("P odds are ", p);
    }
    console.log("i =", i);
    console.log("j =", j);
}

// Making JS Class Like Structure using a constructor function;

function Car(make, model, year, color) {
    // Properties
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.isEngineRunning = false;

    // Methods
    this.start = function() {
        if (!this.isEngineRunning) {
            this.isEngineRunning = true;
            console.log('The engine is now running.');
        } else {
            console.log('The engine is already running.');
        }
    };

    this.stop = function() {
        if (this.isEngineRunning) {
            this.isEngineRunning = false;
            console.log('The engine is now stopped.');
        } else {
            console.log('The engine is already stopped.');
        }
    };


}
const myCar = new Car('Toyota', 'Camry', 2022, 'Blue');

const anotherCar = new Car('Honda', 'Accord', 2021, 'Red');
console.log(myCar.make); // Output: Toyota
console.log(anotherCar.model); // Output: Accord
anotherCar.start();

console.log("---------------------------------------------------------------");

// For In Loop

for (let key in anotherCar) {
    // Check if the property is directly on the object (not inherited)
    if (anotherCar.hasOwnProperty(key)) {
        console.log(`${key}: ${anotherCar[key]}`);
    }
}

console.log("---------------------------------------------------------------");

// Basic Class in JS 

const MyClass = class {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
};
const instance = new MyClass("John");
instance.sayHello();



// _-----------------------------------------------------------------------------------_//
// --------------------------------EXAMLPE OF ABOVE METHOD------------------------------_//
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue'
};
// --------------------------------FOR IN LOOP IN JS (ANOTHER EXAMPLE)------------------//



for (let key in car) {
    // Check if the property is directly on the object (not inherited)
    if (car.hasOwnProperty(key)) {
        console.log(`${key}: ${car[key]}`);
    }
}
console.log("Next Example");

// -------------------------MAKING A CLASS IN JS WITH CLASS CLASS-NAME-------------------//

class Carr {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start() {
        console.log('The engine is now running.');
    }

    stop() {
        console.log('The engine is now stopped.');
    }
}

// ----------------------EXAMPLE OF USING FOR LOOP IN JS--------------------------------//


// Create an instance of the Car class
const myCar1 = new Carr('Toyota', 'Camry', 2022, 'Blue');
console.log(myCar1);

// Iterate over the properties and methods using for...in
for (let key in myCar1) {
    if (myCar1.hasOwnProperty(key)) {
        console.log(`${key}: ${myCar1[key]}`);
    }
}

//----------------------------MY EXAMPLE CLASS-------------------------------------------//

class CricketTeam {
    constructor(TeamName, TeamCaptain, TeamVC, TeamCups) {
        this.TeamName = TeamName;
        this.TeamCaptain = TeamCaptain;
        this.TeamVC = TeamVC;
        this.TeamCups = TeamCups;
    }

    getTeamCap() {
        console.log("The team Captain is " + this.TeamCaptain);
    }
    getTeamVC() {
        console.log("The Team's VC is " + this.TeamVC);
    }
}

const BkBiet = new CricketTeam('BkBiet', 'Dinesh Chandimal', 'Aditya Malik', 4);

for (let key in BkBiet) {
    if (BkBiet.hasOwnProperty(key)) {
        console.log(`${key} : ${BkBiet[key]}`);
    }
}

// -----------------------------fUN CTIONS---------------------------------------------//
function myFunc(theObject) {
    theObject.make = "Lamborgini";
}
const Bus = {
    make: "Honda",
    year: 2002,
    model: "Accord"
};

console.log(Bus.make); // "Honda"
myFunc(Bus);
console.log(Bus.make); // "Toyota"


// 2>> Changing index value of array using a function--------------------//

function Myfunc(thearr) {
    thearr[0] = 30;
}
const myArray = [45];
console.log(myArray);
Myfunc(myArray);
console.log(myArray);

// 3>> Function expression 
// const myfun = function (parameter);

const square = function(number) {
    return number * number;
};

console.log(square(4));

// 4>> Providing a name with the function expression
// Function calling itself///

const Factorial = function fact(n) {
    return n < 2 ? 1 : n * fact(n - 1);
};
console.log(Factorial(8 / 2));


// 5>> Giving a function as a parameter to another function 
// function calling another function

function map(f, a) {
    const newArray = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        newArray[i] = f(a[i]);
    }

    return newArray;
}
const sqauare = function(x) {
    return x * x * x;
}
const Arrs = [1, 2, 3, 4, 5];

console.log(map(square, Arrs));



// ---------------------------------eval()---------------- -------------//
// Example

console.log(eval(new String("2 + 2"))); // returns a String object containing "2 + 2"
console.log(eval("2 + 2")); // returns 4

//------------------------Different ways to call eval-------------------//


// Indirect call through member access
const obj = { eval };
obj.eval("x + y");


//example
console.log(":) " + " (: " + ":) " + " (: " + " :) " + " (: " + " :) " + " (: " + " :) " + " (: " + " :) " + " (: " + " :) " + " (: " + " :) " + " (: " + " :) " + " (: ");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// ---------------------------------Be Vigilant here___----------------------//

// Calling a function before it is declared is called function hoisting.
// {[(important :)(: ) ]}
// Function hoisting only works with function declarations — not with function expressions.
console.log(Square(5));
//    console.log(quad(5));

function Square(n) {
    return n * n;
}
//Case 2 >> Function Expression;;
// const quad = function(n) {
//     return n * n * n * n;
// };

//A Function can take all the variable defiened in the global scope.
//Example

const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add();
}

console.log(getScore()); // "Chamakh scored 5" 

// Recursive Functions

function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
        return;
    }
    if (x === 9) {
        console.log("and for the last time ", x);
    } else {
        console.log("and here we go", x);

    }
    loop(x + 1); // the recursive call
}
loop(0);

//Recursive Function example 2
//in this example the function print the end command after the recursive call ends 

function foo(i) {
    if (i < 0) {
        return;
    }
    console.log(`begin: ${i}`);
    foo(i - 1);
    console.log(`end: ${i}`);
}
foo(3);

//Closure Function>> A function inside a function << Inner function can only be called be the outer function//

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
console.log(">>The Closure function<<>>The Closure function<<>>The Closure function<<>>The Closure function<<>>The Closure function<<")
console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

// Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8


// the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

// IMMEDIATELY INVOKED FUNCCTION EXPRESSION-----------------------//

const getCode = (function() {
    const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

    return function() {
        return apiCode;
    };
})();

console.log(getCode());

// LINE 437: (FUNCTION(){ ----> This is an anonymous function delcaration.
// LINE 443: })() --------> This is immediate function call..



const getPasswords = (function() {
    const password = "@Sagarrana119";
    return function() {
        return password;
    }
})();

console.log(getPasswords());

//_____________________________________________________

const createPet = function(name) {
    // The outer function defines a variable called "name".
    return {
        setName(name) {
            // The enclosed function also defines a variable called "name".
            name = name;
        },
    };
};

const pet = new createPet('Dogie');

// Using the arguments object, you can call a function with more arguments than it is formally declared to accept.
// Argument is array-like not array
//Concatenating Function through argument object
function myFamilyMembers(Seperator) {
    let result = "";

    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + Seperator;
    }
    return result;
}

console.log(myFamilyMembers(",", "Bhawan Singh Rana", "BS Rana", "Manju Rana", "Manoj Singh Rana", "Mamta Rana", "Sagar Rana", "Sadhana Rana", "Diya Rana", "Aarav Rana"));
console.log(myFamilyMembers("; ", "Bhawan Singh Rana", "BS Rana", "Manju Rana", "Manoj Singh Rana", "Mamta Rana", "Sagar Rana", "Sadhana Rana", "Diya Rana", "Aarav Rana"));
console.log(myFamilyMembers(" \\ ", "Bhawan Singh Rana", "BS Rana", "Manju Rana", "Manoj Singh Rana", "Mamta Rana", "Sagar Rana", "Sadhana Rana", "Diya Rana", "Aarav Rana"));

//DEFAULT PARAMETER

function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 5;
    return a * b;
}

console.log(multiply(5)); // 5

// b:3 and a :5 are default parameter
function addition(a, b) {
    b = typeof b !== "undefined" ? b : 3;
    a = typeof a !== "undefined" ? a : 5;
    return a + b;
}
console.log(addition(6));
console.log(addition(4));

// Other way to define default parameter

function addition(aa, bb = 5) {
    return aa + bb;
}
console.log(addition(2));

// map ----> the map function iterates over each element of the numbers array and applies the provided callback function

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(100, 1, 2, 3);

console.log(arr);


//Arrow Functions

const arrs = ["Hydrogen", "Helium", "lethium", "Berrilium"];

const a2 = arrs.map(function(s) {
    return s.length;
});

const a3 = arrs.map((s) => s.length);
console.log(a2);
console.log(a3);


// bound functions

// join converts an array into string!!


const mYArray = ["Wind", "Rain", "Fire"];
const list = mYArray.join(" - ");
console.log(list);


//push ------> adds a new element into the Array
const myyArray = ["1", "2"];
myyArray.push("3"); // myArray is now ["1", "2", "3"]

console.log(myyArray);


//pop -------> removes the last element from the array!!

const myarr = ["Sagar", "Rana", "is", "the", "best", "in", "the", "world"];
const rvd = myarr.pop();
console.log(rvd);

myarr.push("fucking World!!");
const result = myarr.join("-");
console.log(result);


//Shift ------>> REMOVES THE FIRST ELEMENT OF THE ARRAY!!

const shifter = ["1", "2", "3"];
const remove = shifter.shift();
console.log("Shift method removed the first element ", remove);

//unshift ------->> adds

const shiftArray = ["23", "34", "45", "56"];
shiftArray.unshift("first 1", "Second 2");
console.log("Unshift adds one or more than one element in the starting of the Array", shiftArray);


//Slice ------->>extracts all element between the parameters

let Arras = ["a", "b", "c", "d", "e"];
Arras = Arras.slice(1, 4);
console.log("The slice takes the elements between the parameter", Arras);

const mayArray = ["a", "b", "c", "d", "e"];
mayArray.at(-2); // "d", the second-last element of myArray




// Making Classes


// 1... Using Class keyword >>Statement type
class yourClass {
    // Constructor
    constructor() {
            // Constructor body
        }
        // Instance field
    myField = "foo";
    // Instance method
    myMethod() {
            // myMethod body
        }
        // Static field
    static myStaticField = "bar";
    // Static method
    static myStaticMethod() {
            // myStaticMethod body
        }
        // Static block
    static {
        // Static initialization code
    }
    // Fields, methods, static fields, and static methods all have
    // "private" forms

    myPrivateField = "bar";
}


//2 function Keyword
function MyyyClass() {
    this.myField = "foo";
    // Constructor body
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function() {
    // myStaticMethod body
};
MyClass.prototype.myMethod = function() {
    // myMethod body
};

(function() {
    // Static initialization code
})();



// Class Expressions

const YourClss = class YourClass {

}



// Private Field



class Clor {#
    values;



    constructor(r, g, b) {
        this.#values = [r, g, b];
    }
    redDifference(anotherColor) {
        // #values doesn't necessarily need to be accessed from this:
        // you can access private fields of other instances belonging
        // to the same class.
        return this.#values[0] - anotherColor.#values[0];
    }
}

const red = new Color(255, 0, 0);
const crimson = new Color(220, 20, 60);
red.redDifference(crimson); // 35












function countSelected(selectObject) {
    // selectObject  is the parameter list. Functions can accept parameters, which act as variables within the function's scope.

    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }


    return numberSelected;

}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`you have slected ${countSelected(musicTypes)} option(s).`);
});


// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//         if (selectObject.options[i].selected) {
//             numberSelected++;
//         }
//     }
//     return numberSelected;
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
// });