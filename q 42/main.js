//solution
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) {
        return ("The Great ${magician}");
    });
}
var magicians_names = ["Iqra", "nooor", "misbah", "shahzan", "moavia"];
var great_magicians = make_great(magicians_names);
show_magicians(magicians_names);
