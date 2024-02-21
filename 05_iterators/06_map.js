//map 
//map is used as a key value pair

const map = new Map()
map.set( 'in',"india")
map.set('eng', "england")
map.set('aus',"asutrelia")

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} => ${value}`);
}

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const total = arr1.map((num) => num+1 )
console.log(total);

const total2 = arr1.map((num) => {return num*10})
console.log(total2);

const total3 = arr1.map((num) => {return num*10}).map((num) => num+1)
console.log(total3);