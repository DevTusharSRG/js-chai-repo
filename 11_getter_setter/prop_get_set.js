function User() {
    
    Object.defineProperty(this,"username",{
       get: get_username = () => {
        return this._username;
    },
    set:set_username = (username) => {
        this._username = username.toUpperCase();
    },

    },
    Object.defineProperty(this,'username',{
        configurable:true
    })
    );

}

const newUser=new User()
newUser.username="Tushar"
// console.log(newUser.username);

console.log(Object.getOwnPropertyDescriptor(newUser,'username'));

console.log(Math.PI);