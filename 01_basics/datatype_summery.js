//there are two types of datatypes 1)premitive 2)non-premitive

//1)premitive includes 7 types in js
/*
types of datatype
number = represents the numerical value 
string = represents the bundle of chars
bigint = represents yhe numerical data
null = represents the null value
undefined = the value does not defined to variable
symbol 
boolean = represents the true or false value
*/
let name = "rajaram"
let age = 20
let contactNo = BigInt(1234567890)
let job = true
let college;
let location = null
console.log("type of name=",typeof name)
console.log("type of age=",typeof age)
console.log("type of contactno=",typeof contactNo)
console.log("type of job=",typeof job)
console.log("type of college=",typeof college)
console.log("type of location=",typeof location)

//2) non-premitive
//it includes the object , array and functions

let array = ["gulk", "loki", "thor"]  //array

let object = {
    name:"srg",
    age:20
}                                //object

function myfun(name) {
console.log(name);
}                                 //function