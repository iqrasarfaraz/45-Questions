//question number 15
var guestlist = ["hina", "ayesha", "iqra",];
//print the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " can't make dinner"));
//push
guestlist.push("sana");
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are cardially invited to dinner"));
});
