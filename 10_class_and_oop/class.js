// class User{
//     constructor (username,pass){
//         this.username=username
//         this.pass=pass
//     }

//     encryptpass (){
//         console.log(`Encrypted pass ${this.pass}abc`);
//     }

//     changeUsername(){
//         console.log(`new username ${this.username.toUpperCase()}`);
//     }
// }

// let newUser = new User('tushar', '123')
// console.log(newUser.encryptpass());
// console.log(newUser.changeUsername());

//by using objects only

function User(userName , password) {
    this.userName=userName
    this.password=password
}

User.prototype.encryptpass = function () {
    return `Encrypted pass ${this.password}abc`
}

User.prototype.changeUsername=function () {
    return `new username ${this.userName.toUpperCase()}`
}

const chai = new User('srg', '1234')
console.log(chai.encryptpass());
console.log(chai.changeUsername());