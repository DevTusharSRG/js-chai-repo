const user = {
    userName : "Tushar",
    isLogged :true,
    signedUP : 8,

    userDetails : () =>{
        console.log("Get user details in the user obj");
    }
}

console.log(user.userDetails());
console.log(user.userName);