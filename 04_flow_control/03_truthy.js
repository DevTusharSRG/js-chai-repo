//falsy values 
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//all the other values are truthy values
const userName=" ";
if(userName){
    console.log(`user name are ${userName}`);
}

const myObj = {
    
}
if (Object.keys(myObj).length==0){
    console.log("object is empty");
}

//nullish coalescing operator(??) = null and undefined

val1 = 10 ?? 20
val1 = null ?? 20
val1 = undefined ?? 30
val1 = null ?? undefined ?? 40
console.log(val1);