let age: number = 76;

if(age < 2){
    console.log("Your are a baby.");
} 
else if(age >= 2 && age < 4){
    console.log("Your are a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("Your are a kid.");
}
else if(age >= 13 && age < 20){
    console.log("Your are a teenager.");
}
else if(age >= 20 && age < 65){
    console.log("Your are an adult.");
}
else if(age >= 65){
    console.log("Your are an elder.");
}