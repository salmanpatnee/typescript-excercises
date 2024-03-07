function toTitleCase (word: string) :string {
    if(!word) return word
    return word[0].toUpperCase() + word.substring(1);
}

let person_name = "salman abdul ghani";

console.log(`Lower case: ${person_name.toLowerCase()}`);
console.log(`Upper case: ${person_name.toUpperCase()}`);
console.log(`Title case: ${toTitleCase(person_name)}`);