const arr1 = ["js", "cpp", "c", "java"]

arr1.forEach((val) => {
    console.log(val);
});

arr1.forEach((item,index,array) =>{
    console.log(`${item} & ${index} & ${array}`);
})

// for each loop has three parameters 1) item 2) indx  of item 3) whole array