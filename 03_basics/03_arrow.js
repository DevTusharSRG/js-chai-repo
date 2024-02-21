// this keyword refers to current object

const info = {
    userName : "Tushar",
    id : "123",
    
    myMessage :function() {
        console.log(`${this.userName}, welcome `);
    }
}

console.log(info);
info.myMessage();
info.userName="srg";
info.myMessage()


const myFun = (num1, num2) => {
    const num3 = num1+num2
    return num3
}

console.log(myFun(5,6));