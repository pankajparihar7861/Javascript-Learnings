//JS FUNCTIONS

//Execute the function named myFunction?

function myFunction() {
  alert("Hello World!");
}
myFunction();

//Create a function called "myFunction"?

function myFunction(){
alert("Hello World!");
}

//Make the function display "Hello" in the inner HTML of an element with the ID "demo".

function myFunction() {
  document.getElementById("demo").innerHTML= "Hello";
}

// JS OBJECTS

//Alert "John" by extracting information from the person object?

const person = {
    firstName: "John",
    lastName: "Doe"
  };
  alert(person.firstname);

 //Add the following property and value to the person object: country: Norway.

 const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"
   };

 // Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").

const person = {
  name:"John", age:50
};
alert(person.name + " is " + person.age);

//JS EVENTS

//The <button> element should do something when someone clicks on it. Try to fix it!

//<button onclick="alert('Hello')">Click me.</button>

//When the button is clicked, the function "myFunction" should be executed?

//<button onclick="myFunction()">click me</button>

//The <div> element should turn red when someone moves the mouse over it.

<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

//JS STRINGS
//Use the length property to alert the length of txt?
var txt = "Hello World!";
var x = txt.length;
alert(x);

//Use escape characters to alert or print We are "Vikings"and that too Vikings in double quotes

let txt = " We are \"Vikings\" ";
alert(txt);

//Concatenate the two strings to alert "Hello World!".

let str1 = "Hello ";
let str2 = "World!";
alert(str1+str2);

//JS STRING METHODS
//Convert the text into an UPPERCASE text:

let txt = "Hello World!";
txt = txt.toUpperCase();

//Use the slice method to return the word "bananas".

let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);

//Use the correct String method to replace the word "Hello" with the word "Welcome".

let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

//Convert the value of txt to upper case.

let txt = "Hello World";
txt = txt.toUpperCase();

//Convert the value of txt to lower case.

let txt = "Hello World";
txt = txt.toLowerCase();

//JS ARRAYS
//Get the value "Volvo" from the cars array.

const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

//Change the first item of cars to "Ford".

const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0]= "Ford";

//Alert the number of items in an array, using the correct Array property.

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

//Use the correct Array method to remove the last item of the fruits array.

const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

//Use the correct Array method to add "Kiwi" to the fruits array.

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

//Use the splice() method to remove "Orange" and "Apple" from fruits.

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);

//Use the correct Array method to sort the fruits array alphabetically.

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

//Create a Date object and alert the current date and time.

const d = new Date();
alert(d);

//Use the correct Date method to extract the year (four digits) out of a date object.

const d = new Date();
year = d.getFullYear();

//Javascript is always executed sequentially  -- true
//An object in Javascript is simply a collection of name/value pairs -- True
//In Javascript, a primitive type can store only 1 name/value pair at a time -- False

//How many times will the word 'Hello' be printed to the console?
var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}
//output -- prints 2 times
//Defining a variable as an Object Literal accomplishes pretty much the same thing as defining a variable equal to 'new Object()'. 
//However, it's faster and easier to type up an object literal. -- True

// output for the following Javascript code:
function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));//output -- 100


//output of the following Javascript code?
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();
//OUTPUT -- Max likes barking! Bark!

//output of the following 
var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);
//OUTPUT -- 3

//One of the differences between a GET request and POST is that a GET request passes query parameters
// as part of the URL whereas POST request passes them as part of the body of the request. -- True

//Another name for Object Literal is JSON --  False
//Single quotes are not allowed in JSON.

//Use the correct Date method to get the month (0-11) out of a date object.
const d = new Date();
month = d.getMonth();

//Use the correct Date method to set the year of a date object to 2020.

const d = new Date();
d.setFullYear(2020);

//JS MATH
//Use the correct Math method to create a random number.

let r = Math.random();

//Use the correct Math method to return the largest number of 10 and 20.
let x = Math.max(10, 20);

//Use the correct Math method to round a number to the nearest integer.

let x = Math.round(5.3);

//Use the correct Math method to get the square root of 9.

let x = Math.sqrt(9);

//JS COMPARISONS
//Choose the correct comparison operator to alert true, when x is equal to y.

x = 10;
y = 10;
alert(x ==y);

//Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

var age = n;
var voteable = (age <18) ?"Too young" : "Old enough";
alert(voteable);































