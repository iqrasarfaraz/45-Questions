

//solution
 function show_magicians(magicians:string[]): void {
    magicians.forEach(magician => console.log(magician));
 }
 function make_great (magicians:string[]):string[]{
    return magicians.map(magician => magician +(` the Great ${magician}`)

) }
let magician_names: string[] = ["Iqra", "noor","misbah","saba","samina"];
let great_magicians = make_great([...magician_names]); //creating a copy using the spread operator
//show the original magician names
console.log("Original Magicians:");
 show_magicians(magician_names);
 //show the modified magician names
 console.log("\nGreat magicians:");
 show_magicians( great_magicians)