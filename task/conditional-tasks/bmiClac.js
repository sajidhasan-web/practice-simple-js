
let weightKg = 60;
let heightInMeters = 1.5;

const BMI = weightKg / (heightInMeters ** 2);

if(BMI < 18.5){
    console.log( BMI.toFixed(2) , ('You are underweight!'));
}
else if(BMI >= 18.5 && BMI <= 24.9){

        console.log( BMI.toFixed(2) , ('you are normal'));
}

else if( BMI >= 25 && BMI <= 29.9 ){
        console.log( BMI.toFixed(2) , ('You are overweight!'));
    }
else{
    console.log(BMI.toFixed(2) , ('You are obese!'))
}

