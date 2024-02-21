// immidiately invoked function

function one() {
    console.log("this is normal function");
}

one();          //we have to call normal function explicitly

//where the iife function should called directly

(function two() {
    console.log("this is iife function");
})();

(()=>{
    console.log("this is iife using arrow function")
})();

((name)=>{
    console.log(`${name}, welcome to iife`)
})("tushar");           //we can provide the parameters using iife