//Why do we need functions

let age = +prompt("Enter your age","");

if(age<16){
    alert("you are child");
    alert("you are not allowed to drive a car");
}

if(age>=16 && age<18){
    alert("you are teenager");
    alert("you are not allowed to drive a car with parent");
}

if(age>=18){
    alert("you are adult");
    alert("you are allowed to drive a car");
}
//we can use function and reduce code in the above example by,refer code below

function displayMessage(text1,text2){
    alert(text1);
    alert(text2);
}

let age = +prompt("Enter your age","");

if(age<16){
   displayMessage("You are child", "You are not allowed to drive a car")
}

if(age>=16 && age<18){
    displayMessage("you are teenager","you are not allowed to drive a car with parents")
}

if(age>=18){
    displayMessage("You are adult","you are allowed to drive a car")
}

//In Line no 21 22, we declared alert function only two times and in every if condition we are calling only the function only 3 times 
//instead of repeating same function code evrywhere, we just create function and call in everywhere we want, it reduces lines of code

//FUNCTION DECLARATION

function showMessage(){
    console.log("I am a function:");
    alert("I am a function alert");
}
showMessage(); //To execute the function we need to call the function its mandatory


//FUNCTION WITH PARAMETER AND DEFINING FUNCTION IN DIFFERENT WAYS


function showMessage(message){   //here message is like variable as well as parameter to function, passed to a function which has "I am a parameter" as parameter
    //console.log("I am a function:");
    //alert("I am a function alert");
    console.log(`The passed parameter is  ${message}`);
}
showMessage("I am a parameter");

showMessage("call1: I'm Pankaj");//To execute line no:58 with 62,65,66 line no:56,57 are commented
//and to concatenate data use back tick with ${}. nd pass variable in {}.

showMessage("call2: I'm virat");
showMessage("call3: I'm rohit");
showMessage("call4: I'm rahul");
showMessage("call5: I'm dhoni");
showMessage("call6: I'm sachin");
showMessage("call7: I'm jadeja");

//here above lines say that we can call the function as many times as we want and 
//change parameters inside eg: call2, call3 so on.. it will have same behaviour but with different string 
//This tree of objects, or nodes, representing the web page's content is called the DOM. DOM represents current page content. 
//When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.

function showMessage(message = "default message"){  
    //console.log("I am a function:");
    //alert("I am a function alert");
    console.log(`The passed parameter is  ${message}`);// o/p: The passed parameter is default message
}
showMessage();

function showMessage(message = "default message"){  
    //console.log("I am a function:");
    //alert("I am a function alert");
    console.log(`The passed parameter is  ${message}`);
}
showMessage("I am show function");
// o/p: The passed parameter is I am show function
//default message is ignored when we give parameter to the function call its of high priorty

//RETURNING A VALUE FROM FUNCTION
function sum (x,y){
    return x+y;
}
var z = sum(5,10);//here we are calling function and its gets executed and 
//returns value which we are storing in a variable Z and printing using console
console.log(z);