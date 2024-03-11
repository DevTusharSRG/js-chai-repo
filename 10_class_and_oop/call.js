function setUsername (username){
    this.username = username
}

function data (username,mail,add){
    setUsername.call(this,username)
    this.mail=mail
    this.add=add
}

const srg = new data('tushar','tushar@mail.com','pune')
console.log(srg);