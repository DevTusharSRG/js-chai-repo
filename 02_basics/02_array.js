const heros1 = ["shaktiman", "hanuman", "karn"]
const heros2 = ["hulk", "superman", "batman"]

// heros1.push(heros2);
// console.log(heros1);
console.log(heros1.concat(heros2));

const newArray = [...heros1,...heros2]
console.log(newArray);

const arrayInArray = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arrayInArray.flat(Infinity));

console.log(Array.isArray("Tushar"));
console.log(Array.from("tushar"));
