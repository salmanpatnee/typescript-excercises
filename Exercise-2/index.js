function toTitleCase(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substring(1);
}
var person_name = "salman abdul ghani";
console.log("Lower case: ".concat(person_name.toLowerCase()));
console.log("Upper case: ".concat(person_name.toUpperCase()));
console.log("Title case: ".concat(toTitleCase(person_name)));
