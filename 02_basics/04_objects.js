//const instaUser = new Object();  // this is a declaration of singalton object
const instaUser = {
    id : "123",
    name : "Tushar",
    Email : " srg@mail.com"
}

console.log(instaUser);

const regularUser = {
    id : "1234",
    fullName : {
        firstName : "Tushar"
    },
    Email : "tushar@mail.com"
}
// console.log(regularUser);
console.log(regularUser.fullName.firstName);

const arrObj = [
    {
        name : "Tushar"
    },
    {
        id : "123"
    },
    {
        Email : "tushar@mail.com"
    }
]

console.log(arrObj[1]);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));