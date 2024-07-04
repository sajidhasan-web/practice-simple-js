let phones = [
    {name:"Samsung", price:32000, color:"black", camera:"12mpx"},
    {name:"Xiaomi", price:18000, color:"black", camera:"12mpx"},
    {name:"Apple", price:100000, color:"black", camera:"12mpx"},
    {name:"Walton", price:15000, color:"black", camera:"12mpx"},
    {name:"HTC", price:30000, color:"black", camera:"12mpx"},
];

function highestPricePhone(phones){
    let highest = phones[0]
    for(let phone of phones){
        if(phone.price > highest.price){

            highest = phone
        
        }
       
    }
    return highest
}

let highestPrice = highestPricePhone(phones)

console.log('the most highest price phone is:', highestPrice)