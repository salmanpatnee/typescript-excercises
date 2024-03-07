var magicians_names = ["Albus Dumbledore", "Harry Porter", "Severus Snape", "Sirius Black"];
function show_magicians(names) {
    names.map(function (name) {
        console.log(name);
    });
}
function make_great(names) {
    names.map(function (name, index) {
        names[index] = "The great ".concat(name);
    });
}
make_great(magicians_names);
show_magicians(magicians_names);
