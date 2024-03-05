console.log("1. Tests for equality and inequality with strings");

let cityCode: string = "KHI";

console.log("cityCode == 'LHR'")
console.log(cityCode == "LHR")

console.log("cityCode == 'KHI'")
console.log(cityCode == "KHI")

console.log("cityCode != 'LHR'")
console.log(cityCode != "LHR")

console.log("cityCode != 'KHI'")
console.log(cityCode != "KHI")

console.log("\n 2. Tests using the lower case function");

console.log("cityCode.toLowerCase() == 'khi'")
console.log(cityCode.toLowerCase() == "khi")

console.log("cityCode.toLowerCase() != 'khi'")
console.log(cityCode.toLowerCase() != "khi")

console.log("\n 3. Numerical tests");

let target:number =  220;

console.log("target == 220")
console.log(target == 220)

console.log("target != 220")
console.log(target != 220)


console.log("target > 200")
console.log(target > 200)

console.log("target < 200")
console.log(target < 200)


console.log("target >= 200")
console.log(target >= 200)

console.log("target <= 200")
console.log(target <= 200)

console.log("\n 4. Tests using 'and' and 'or' operators");

console.log("target > 220 && target < 300")
console.log(target > 200 && target < 300)

console.log("target > 230 || target < 210")
console.log(target > 230 || target < 210)

console.log("\n 5. Test whether an item is in a array");

let colors: string[] = ["Red", "Green", "Blue"];
if(undefined !== colors.find(color => color == "Green") ) {

    console.log("Color exits.");
}

if(undefined === colors.find(color => color == "Reds") ) {

    console.log("Color not exits.");
}