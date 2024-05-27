let guestlist:string[]=["hina","ayesha","sana","rahila"];
console.log("Great news! we found a bigger table");
guestlist.unshift("hammad");
guestlist.splice(Math.floor(guestlist.length/2),0,"bushra");
guestlist.push("sadia");
console.log(guestlist);
guestlist.forEach(guest=>{
console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});
