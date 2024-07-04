const ticketPrice = 800;
let age = 40;
let isStudent = false;



if(age <= 10){
    // for children no ticket

    console.log('For children no ticket needed')
}
else if( isStudent == true){
    // 50% discount for students
    let discount = ticketPrice * 50 / 100; 
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else if (age >= 60 ){
    // senior citizen gets 15% discount
    let discount = ticketPrice * 15 / 100;
    let payAmount = ticketPrice - discount;
    console.log(payAmount);
}

else{
    console.log(ticketPrice);
}
