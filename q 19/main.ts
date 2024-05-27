import { log } from "console";

let guestlist:string[]=["hina","ayesha","sana","rahila"];
guestlist.unshift("hammad");
guestlist.push("sadia");
console.log(guestlist);
guestlist.forEach(guest=>{
});
console.log ("\n sorry we can't arrange big table,only two person will be invited\n");
while (guestlist.length>2){
   let removeGuest= guestlist.pop();
   console.log(`sorry ${removeGuest}, you are not invited for dinner`);
}
for (let i=0;i<guestlist.length;i++){
    console.log(`Dear ${guestlist[i]}, you are still invited for dinner`);

}
guestlist.splice(0,2);
console.log(guestlist);
console.log(`Total number of guest : ${guestlist.length}`);