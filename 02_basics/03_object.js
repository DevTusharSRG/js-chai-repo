//singaltone object
//object.create
const sym = Symbol("key1")
//object retrals
const obj1 = {
    name:"Tushar",
    "full name" : "Dev Tushar",
    email: "Tushar@mail.com",
    isLoggedIn : true,
    [sym] : "newkey",                   //we can define the symbol like this
    weekOff : ["monday", "saturday"]
}
console.log(obj1);                  //we can call object like this
console.log(obj1.email);            //we can fetch the value from the object using dot
console.log(obj1["email"]);         //we can fetch value as well
console.log(obj1["full name"]);     //the square bracket are used for that type mostly


obj1.email="srg@mail.com"
console.log(obj1);
// Object.freeze(obj1)               //it is used to freez the object it cannot edit
Object.email="satish@mail.com"
console.log(obj1);

obj1.greeting = function () {
    console.log("hello and welcome to js world");
}

console.log(obj1.greeting());