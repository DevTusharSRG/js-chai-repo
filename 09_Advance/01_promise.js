const firstPromise = new Promise((resolve,reject) =>{
    //Do as a async task
    //DB network Cryptography
    setTimeout(() => {
        console.log('Async is complete');
        resolve()
    }, 1000);
})

firstPromise.then(() =>{
    console.log('Promise is consumed');
})

//in one step

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('assync second');
        resolve()
    }, 1000);
}).then(() =>{
    console.log('2 is resolved');
})

// provede a object in promise

const threePromise =  new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({userName:'srg',email:'srg@mail.com'})
    }, 1000);
})
threePromise.then((user) =>{
    console.log(user);
})

//use of resolve and reject then and catch method

const fourPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName:'Tushar',email:'srg@mail.com'})
        } else {
            console.log('Error : something Went Wrong');
        }
    }, 1000);
})

fourPromise
.then((user) =>{
    console.log(user);
    return user.userName
})
.then((userName) =>{
    console.log(userName);
})
.catch((e)=>{
    console.log(e);
}).finally(()=> console.log("'finally is called'"))


// use of asynk await and try catch
const fivePromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({userName:'javascript',email:'srg@mail.com'})
        } else {
            reject('Error : something Went Wrong in javascript')
        }
    }, 1000);
})

async function consumeFive() {
    try {
        const response = await fivePromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeFive()

async function getAllUser() {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data); 
    } catch (error) {
        console.log("Error");
    }
}

getAllUser()

//fetch 

fetch('https://jsonplaceholder.typicode.com/users'
).then((response) => {
    return response.json()
}).then((data) =>{
    console.log(data);
}).catch((error) => console.log("error:",error))