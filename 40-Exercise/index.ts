let magicians_names: string[] = ["Albus Dumbledore", "Harry Porter", "Severus Snape", "Sirius Black"];

function show_magicians(names: string[]): void {
    names.map(name => {
        console.log(name);
        
    })
}

function make_great(names: string[]): void {
    names.map((name, index) => {
        names[index] = `The great ${name}`;
    })
}

make_great(magicians_names);
show_magicians(magicians_names);