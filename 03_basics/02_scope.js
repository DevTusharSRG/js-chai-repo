// let  a = 10
// const  b = 20
// var c = 30
 
// if (true){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

if (true){
    let  a = 10
    const  b = 20
    var c = 30
}
    // console.log(a);
    // console.log(b);
    // console.log(c);

    //the scope of var is globle and the scope of let and const is local and it is limited to block

    function one() {
        console.log("tushar");
        name = "srg"
        function two() {
            console.log("inner function")
           let  id = "123"
            console.log(name);
        }
        // console.log(id);        //we cannot call the id at the out of the bock where th variable was declared 
        two()
    }
one()

function type1(value) {
    return value
}

const type2 = function (value){
    return value
}
