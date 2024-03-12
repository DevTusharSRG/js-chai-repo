class User {
    constructor(username,email){
        this._username=username;
        this._email=email;
    }

    get username (){
        return this._username
    }

    set username(value){
        this._username=value
    }
}

const newUser= new User('tushar','tushar@mail.com');
newUser.username="krusha"
console.log(newUser.username);