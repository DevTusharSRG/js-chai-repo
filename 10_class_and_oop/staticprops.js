class User {
    constructor(username){
        this.username=username
    }
    display(){
        console.log(`welcome ${this.username}`);
    }
    static userId(){                    //we cannot access static method 
        return '123'
    }
}

// const obj = new User('tushar')
// obj.display()
// console.log(obj.userId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }

    show(){
        console.log(`Email ${this.email}`);
    }
}

const obj = new Teacher('tushar','tushar@mail.com')
obj.show()
obj.userId()