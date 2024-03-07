function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return "Size of the shirt is ".concat(size, " and \"").concat(message, "\" message is printed on the shirt");
}
console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Medium", "Catch me if you can!"));
