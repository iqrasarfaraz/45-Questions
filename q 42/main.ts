//solution
function show_magicians(magicians:string[]): void{
    magicians.forEach(magician => {
        console.log(magician)
    });
}
function make_great(magicians:string[]):string[]{
    return magicians.map(magician => {
        return ("The Great ${magician}")
    });
}
let magicians_names: string[]=["Iqra","nooor","misbah","shahzan", "moavia"];
let great_magicians = make_great(magicians_names);
show_magicians(magicians_names);