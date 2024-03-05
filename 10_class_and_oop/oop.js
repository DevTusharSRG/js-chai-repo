const user = {
    userName : "Tushar",
    isLogged :true,
    signedUP : 8,

    userDetails : () =>{
        console.log("Get user details in the user obj");
    //     console.log(this.userName);
    //     console.log(this);
     }
}

// console.log(user.userDetails());
console.log(user.userName);

// const details = (name , logged,signup) =>{
//     this.name=name
//     this.logged=logged
//     this.signup =signup

//     return this
// }

// const userOne =  details('srg',12,true)
// const userTwo =  details('Tushar',11,false)

// console.log(userOne);
// console.log(userTwo);      //both are print same output hence we use the new keyword

function users (name , logged,signup) {
    this.name=name
    this.logged=logged
    this.signup =signup

    this.greeting = function () {
        console.log(`welcome :${name}`);
    }

    return this
} 

const userOne =  new users('srg',12,true)
const userTwo =  new users('Tushar',11,false)

console.log(userOne);
console.log(userTwo);