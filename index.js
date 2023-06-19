//Hey  , here is log the login 
console.log("log the login");

//Hey , here is log the login error
console.log("log the login error");

//Hey , here is log the registration error
console.log("log the registration error");

const constNumber = 1000_000_000; 
//A billion comes with 9 zero's so it can can be written like this to be more readable for the developer and it also remains as number just separated by underscore
console.log(constNumber);

const constNumberBillion = 1e9 ; 
//there also another way to define a number like above one by 1e9-->1000000000 or 5e6-->5000000
//or suppose 5e-6 -->output is 0.000005
console.log(constNumberBillion);


const constBoolean = true;
console.log(constBoolean);


const constString = "String";
console.log(constString);

var x=10;
var y=23;
var z = x + y;

x++;
console.log(x);
//console log will follow the last changed value of X so it remains as 11 
console.log(y);
console.log(z);

var a = 2** 3 ;
//its we can say same like power in maths , we want 2 to be multiplied three 
console.log(a);

//checking number methods
var c = 0.9;
console.log(c);

var d = c.toString();//here the value in variable c is number it gets changed to string and stored in variable d

console.log(d);

//parsing the string value in variable to number 
var c = "10";
var d = Number(c);
console.log(d);

var d = parseInt(c);//line no 51 and 54 both are same but only method differs
console.log(d);

//NaN -- Not a Number
var c = "Pankaj";
var d = parseInt(c);
console.log(d);
//it means in variable c we have string value and we converting it to integer and storing in variable d as NaN value

var d = isNaN("Pankaj");//to check whether what type of value a variable contains inside ,it returns true or false
console.log(d);







