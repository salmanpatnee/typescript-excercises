var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_names = ["Albus Dumbledore", "Harry Porter", "Severus Snape", "Sirius Black"];
var magicians_names2 = __spreadArray([], magicians_names, true);
function show_magicians(names) {
    names.map(function (name) {
        console.log(name);
    });
}
function make_great(names) {
    return names.map(function (name) { return "The great ".concat(name); });
}
magicians_names2 = make_great(magicians_names2);
show_magicians(magicians_names2);
show_magicians(magicians_names);
