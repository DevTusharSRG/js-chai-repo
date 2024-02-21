if (true){
    console.log("Executed");
}

if (false){                                     //this condition never execute
    console.log("false execute");               // this statement does not execute 
}

if (2==2){
    console.log("both are equals");
}

if (2=="2"){                                          //it cannot check the type of data
    console.log("both the number and string are equals");
}

if (2==="2"){                                          //it strictly check the type of the data
    console.log("bothe are the same");
}

let a=10
if (a>=10){
    console.log("a is greater tahn 10 or equals to 10");
}else{
    console.log("a is not greater than 10");
}