const discriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(discriptor);

// output = {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const user = {
    name :"Tushar",
    age : 20,
    language : "marathi",

    college : ()=>{
        console.log("dont Know");
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));

// Object.defineProperty(user,"name",{
//     writable: false,
//   enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(user,"name"));

// for (const [key,value] of Object.entries(user)) {
//     console.log(`${key}:${value}`);
// }

for (const [key,value] of Object.entries(user)) {
    
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
    
}