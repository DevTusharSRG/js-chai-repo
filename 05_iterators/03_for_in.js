const lung = {
    js:"javascript",
    cpp:"c plus plus",
    py : "python",
    java: "java"
}

for (const key in lung) {
    console.log(key);
}

for (const key in lung) {
    console.log(`${key} and ${lung[key]}`);
}

//mostly for in loop is used in objects