class User {
    constructor (username){
        this.username=username
    }

    display(){
        console.log(`welcome ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,mail,pass){
        super(username);
        this.mail=mail;
        this.pass=pass;
    }

    show(){
        console.log(`username of teacher is ${this.username}`);
    }
}

const obj = new Teacher('tushar','tushar@mail.com','abc123')
obj.show()