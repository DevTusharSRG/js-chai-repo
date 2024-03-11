let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "slise",

    spiderpower : function () {
        console.log(`the power of spider is ${this.spiderman}`);
    }
}

console.log(heroPower.spiderpower());

Object.prototype.tushar = function () {
    console.log('this is new prototype');
}

myHeroes.tushar()

let user = {
    username : "tushar"
}
let teacher = {
    sub : "javascript"
}

let tateacher = {
    islogged : false
}

let clerk = {
    salary : 12345,
    __proto__ : tateacher
}

teacher.__proto__ = user

let name = "srg   "
String.prototype.trueLength = function () {
    console.log(this);
    console.log(this.trim().length);
}

name.trueLength()