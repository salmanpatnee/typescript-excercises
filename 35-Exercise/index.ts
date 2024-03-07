function make_shirt(size: string = "Large", message: string = "I love TypeScript"): string {
    return `Size of the shirt is ${size} and "${message}" message is printed on the shirt`;
}

console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Medium", "Catch me if you can!"));
