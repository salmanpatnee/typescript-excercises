let magicians_names: string[] = ["Albus Dumbledore", "Harry Porter", "Severus Snape", "Sirius Black"];
let magicians_names2 = [...magicians_names];

function show_magicians(names: string[]): void {
    names.map(name => {
        console.log(name);
    })
}

function make_great(names: string[]): string[] {
    return names.map((name) => `The great ${name}`)
}

magicians_names2 = make_great(magicians_names2);

show_magicians(magicians_names2);
show_magicians(magicians_names);