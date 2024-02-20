function myFunction (){
    console.log("My name is tushar");
}

// console.log(myFunction());
myFunction()

function addition(num1, num2) {
    const num3 = num1+num2
    return num3
}
console.log(addition(2,3));

function Calculate (...num1){               // for calling unknown count of parameters we use a rest operator it like a saperator
    return num1 
}

console.log(Calculate(200,300,400));

const order= {
    username : "Tushar",
    price : "199"
}

function callOrder(anyObject) {
    console.log(`my name is ${anyObject.username} the ordered object price is ${anyObject.price}`);
}

callOrder(order)

const arrObj = [100, 200, 300, 400]

function callArray(anyArray) {
    return anyArray[1]
    
}

console.log(callArray(arrObj));