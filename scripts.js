/*REMOVE ALL (//) FROM CONSOLE STATEMENTS AFTER EXECUTING 
Strings concept basic syntax*/
var x = "This is a String";
//console.log(x);
//Multiple lines of strings using back Ticks
var x = `This is a String
this is pankaj here
bhdhvcvsh`;// long string can be broken into multiple lines by back tick


//String Escape Notation - how to write Quote in a string variable
var x = 'My name is "Pankaj virat kohli"'//(Quotation inside Quotations as output in simple terms) i.e 
//1.one string inside another string use ( ' "" ')
//console.log(x);

//2.another way of string escape notation -- "john said /"this is a string /" "; (Quotation inside Quotations as output in simple terms)
var x = "john said :\"This is a string\"";
//console.log(x);


//String Concatenation concept
var a = "Pankaj";
var b = "virat kohli is a fan of " +a;
//console.log(b);


//another modern way in javascript to concatenate one string with another i.e stored in one variable 'a' then give that string in back tick and ${} syntax and pass the variable name 
var a = "Pankaj";
var b = `virat kohli is a fan of ${a}`; //use back ticks with ${} We can write javascript inside curly braces or variable name
//console.log(b);

//String methods concepts
var a  = "Virat";
var b = `Rohit is a friend of ${a}`;
var length = a.length; //syntax: var length = variablename.length
console.log(b);
console.log(length);
console.log(b.charAt(7));

console.log("CharAt(7):" + b.charAt(7));
console.log("concat : " + b.concat(" and peter"));
console.log("indexOf(f):" + b.indexOf("f"));
console.log("lastindexOf(f):" +b.lastIndexOf("f"));
console.log("replace(x):" + b.replace("f" , "aaaa"));
console.log("touppercase:" + b.toUpperCase());
var ischecked = "true";
//How to check type of variable or constant
var myname = "Pankaj";
console.log(typeof myname);//output is string

var myname;
console.log(typeof myname);//output is undefined becoz variable does not have any initialization

//Null And Undefined concepts
//U can also give null as a value to a variable it means nothing , null and undefined are different
var myname = null;

//its better to declare null than not initialising value to a variable

/*Nullish Coalescing operator '??' (in simp terms to change the value of variable)
It means if the variable 1 is not defined 
then the variable 2 gets the dafault value or we can asssign some value after the ?? operator
var 2 takes that value*/
//scenario 1
var myname;
console.log(typeof myname);
var myname2 = myname ?? "Nouh";//we can see o/p as nouh
console.log("myname 2 = " + myname2);

//scenario 2
var myname = "Pankaj";
console.log(typeof myname);
var myname2 = myname ?? "Nouh";//here we can see o/p as Pankaj becoz we passed value so nouh won't be printed
console.log("myname 2 = " + myname2);

//String comparison
var a = "az";
var b = "ze";
console.log(a<b);//it compares letter by letter , it returns true or false

var a = "az";
var b = "ae";
console.log(a<b);//here first letter of both variable is same so it compares second letters of both variable

var x = 5;
var y = 10;
x += y;
console.log(x);//15
console.log(y);//10

//Comparison operators
var a = 2;
var b = 5;
console.log(a<b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);//these operators make the logic of our programs
 var a = "c";
 var b = "z";
 console.log(a>b);//results false it checks orders of string
var a = "as";
var b = "ae";
console.log(a < b);
//here it checks first letter of a string, its same so it goes to second letter thn compares accordingly
//and results false
var a = "2"; //This is equal to a=2;
//the comparison will try to change string to number thn compare thus we can compare two variables
var b = 3;
console.log(a < b);//hence compares 2 less 3 ,result is true

var a = true;
var b = 1 ;
console.log(a == b);//true and value 1 is same and vice versa i.e 0 and false

/*Funny Consequence
It is possible that at the same time:

Two values are equal.

One of them is true as a boolean and the other one is false as a boolean.

For example:

let a = 0;
alert( Boolean(a) ); // false
 
let b = "0";
alert( Boolean(b) ); // true
 
alert(a == b); // true!
From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), 
while the explicit Boolean conversion uses another set of rules.*/

//comparing === and == operator
var a = false;
var b = "";//empty string equals to zero
console.log(a == b);//so == compares values of both variables result = true.
console.log(a === b);//=== compare me the value and also the type result = false.
console.log(typeof(b));

var a = "lalith";
var b = "lalith";
console.log(a === b);//true becoz value nd type remain same

var a = false;
var b = 0;
console.log(a !== b);//a is different thn b and also different type
//so result is true
console.log(null == undefined);// result is true
console.log(null === undefined);//result is false, here it checks type so it has different types


/*Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
*/
//Ternary operator 
//it is like if statement for comparison between two values and giving you result based on that... 
var a = 5;
var b = 10;
var c = a < b ? 5 : 10;//it means it a<b condition true means return 5 or else return 10
console.log(c);

var a = 12;
var b = 34;
var d = a > b ? 12 : 34;//also check condition like below
var e = a == 12 ? 12 :34; 
console.log(d);
console.log(e);

//Logical Operators
var a = 10;
var b = 12;
var c = false;
var d = true;
console.log(c && d );//&& is like multiply result is false
console.log(c || d );// || is like adding so o+1=1 i.e true
console.log(a < b || c);// a<b is true c is false hence or result is "true"

//OPERATOR PRECEDENCE
var a = 10;
var b = 12;
var c = 3;
var d = 7;
console.log(a < b || (b < c && a > c));//bracket is done first thn or and prints result
console.log((a < b && a > 6) || (b < c && a > c));

//CONDITIONALS USING IF()
var a = 0;
var b = 1;
if(a >b){//if the condition satisfies thn only it gets executed
    console.log("a is bigger than b");
    console.log("a is bigger than b");
    console.log("a is bigger than b");
    console.log("a is bigger than b");
}// place specific code inside if statement based on the logic 
//if the user logged in or login value or variable value is true
//thn we allow the user to redirect to the dashboard, otherwise we dont allow him and 
//show him some error msg that his password is wrong .

//Truthy and Falsy concept
if(true,42,"0","false",-42,3.14,-3.14,Infinity,-Infinity,{},[],new Date()){
    console.log("is truthy");
}
//In if condition all these values can be used, and statements will be executed and are considered as Truthy.
//{} denote empty object and [] denote empty array

//falsy concept
if(false,null,undefined,0,-0,NaN,""){
  console.log("is falsy");
}
//false as string is executed but as boolean not and empty string is not executed in if condition
//In all above 7 cases if condition is not executed and considered as falsy 

//LOOPING WITH WHILE()
//In Programming in general u need to repeat some action to happen until 
//some condition get achieved by using while()

var i = 0;
while(i < 10){
    console.log(i);//prints 0 to 9
    i++;
}
 
var i = 10;
 while(i >= 0){
    console.log(i);//prints 10 to 1
    i--;
 }

 var i = 10;
 while(i){
    //console.log(i);
    i--;
 }
//DO WHILE 
//log statement is executed atleast once even if the condition is false
var k = 0;
var j = 10;
do{
    console.log(j);//gets printed after checks condition if false comes out
    j++;
}while (j < 10);

//FOR LOOP
for(var k = 0;k < 10;k = k + 2){//k=k+2 can be written as k+=2
    console.log(k);
}

for (var k = 0; k <=10 ; k++){
    if(k!=5){   //here when value 5 comes and checks with 5!=5 it fails so it gets skipped and moves on
     console.log(k);
    }
    //console.log(k);
}

for (var x = 4; x < 10; x++){
    console.log(x);
    if(x == 5){
        break;//it stops here not goes till 10 
    }
}
//if we want to continue use continue keyword instead of break
for(var x = 0; x < 10; x++){
    if(x == 5){
        continue;
        //console.log(x);
    }
    console.log(x);//skips 5 and prints 0 to 9
}

for(var x = 0; x < 10; x++){
    if(x == 5){
        console.log(x);//here only 5 gets printed becoz 
        //under for loop , inside if we given value directly x==5 so
    }
}
//NUMBERS ACCUMULATOR AND PROMPT FUNCTION IMPORTANT

/*create variable "sum" and it will have our accumulation value
how we can get value from the user so getting a value from the user we can say variable value and use js keyword called prompt and
this prompt will display some pop up in the browser asking user to put some value
and we can put any string and second parameter by default we can have empty string or zero*/

var value = prompt('enter a number', );//POP UP TO SHOW----ENTER A NUMBER AND ALLOWS USER TO ENTER DETAILS INTO IT AND PRINT IT IN CONSOLE
var value = prompt("enter a string","");//POP UP TO SHOW----ENTER A STRING AND ALLOWS USER TO ENTER DETAILS INTO IT AND PRINT IT IN CONSOLE
console.log(value);

//ALERT FUNCTION 
var value = alert("enter the fullname");//it shows just pop up of enter full name

var value = prompt("enter a number","");
console.log(Number(value));//here number is passed and prints number in console and stored as number 
//whereas if a string is passed in pop up  we use -- Number(value) conversion thn it stores as NaN
//INSTEAD OF Number(value) we can use +value i.e +variable Name to convert to number in console



//output for the following code - genaral question
var person = {
    name: "Joe Camel",
    age: 42,
    status: "dead"
  }
  console.log(typeof person);//output is "object"

  //following code print to the console?
  var hat = {
    size: "large",
    color: "orange"
  }
  console.log(hat.size);// large

  //following code print to the console
  var teddy_bear = {
    texture: "fluffy"
  }
  console.log(teddy_bear["texture"]);// "fluffy"

  //following code print to the console
  var fat_joe = {
    crew: "Terror Squad"
  }
  fat_joe.crew = "something";
  console.log(fat_joe.crew);// "something"

  //following code print to the console
  var pen = {};
pen.ink = "blue";
console.log(pen.ink);// blue



// PROGRAM FOR A SIMPLE CALCULATOR
 
// take the operator input
//const operator = prompt('Enter operator ( either +, -, * or / ): ');
 
// take the operand input
//const number1 = parseFloat(prompt('Enter first number: '));
//const number2 = parseFloat(prompt('Enter second number: '));
 
let result;
 
// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
 
// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);


//Consider the following object:

let cities = [ 
 {name: 'Los Angeles', population: 3792621},
 {name: 'New York', population: 8175133},
 {name: 'Chicago', population: 2695598},
 {name: 'Houston', population: 2099451},
 {name: 'Philadelphia', population: 1526006}
 ];
/*We want to return a new array only with the cities that have population bigger than 30000.

Hints:

- use filter method

- return a new array

- view the result in console */

 //SOLUTION

/*let bigCities = cities.filter(function (e) {
    return e.population > 3000000; 
   }); 
   console.log(bigCities); */


// 1.What does the following code print to the console?

["uno", "dos", "tres"].length;
//output = 3

// 2. Print the last element of my_array to the console.

var my_array = ["horse", "pig", "cow"];
// Output = console.log(my_array[2]);

// 3.What does the following code print to the console?

var writing_tools = ["pencil", "pen", "marker"];
console.log(writing_tools[writing_tools.length - 1]);
// output = "marker"

// 4. What does the following code print to the console?

var b = [1, 2];
b[0] = "master p";
console.log(b);// ["master p",2];

//Update the "shots" element in the following array to be "don't do it".

var beverages = ["beer", "wine", "shots"];// beverages[2] = "don't do it";






