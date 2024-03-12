const User=  {
    _username:"krushna",

    get username(){
        return this._username
    },
    set username(data){
        this._username=data
    }
}

console.log(User.username);