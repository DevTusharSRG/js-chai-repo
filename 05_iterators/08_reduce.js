// reduce function 

const arr1 = [1,2,3]
const output = arr1.reduce(function (acc,curr) {
    return acc+curr;
},0
)

console.log(output);


const shoppingCart = [
    {
        book:"book1",
        price:123
    },
    {
        book:"book2",
        price:134
    },
    {
        book:"book3",
        price:12356
    },
    {
        book:"book4",
        price:190
    }
]

const book = shoppingCart.reduce((acc,curr) => {
       return acc+curr.price
},0)

console.log(book);