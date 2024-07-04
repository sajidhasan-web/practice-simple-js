let products =[
    {name:'shampoo', price: 100},
    {name:'t-shirt', price: 100},
    {name:'pant', price: 400},
    {name:'shoe', price: 900},
]

 function totalProductsPrice(products){
    let sum = 0;
    for(let product of products){
        sum = sum + product.price
    }
    return sum
       
 }

 let totalPrice = totalProductsPrice(products)
 console.log('Total Products Price:', totalPrice)