//question number 15

let guestlist: string []=["hina","ayesha","iqra",];
//print the name who cant make dinner
let unableAttend: string = guestlist.splice(1,1)[0];
console.log(`${unableAttend} can't make dinner`);
//push
guestlist.push("sana");
//print a message
guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are cardially invited to dinner`);
})
