"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestlist = ["hina", "ayesha", "sana", "rahila"];
guestlist.unshift("hammad");
guestlist.push("sadia");
console.log(guestlist);
guestlist.forEach(function (guest) {
});
console.log("\n sorry we can't arrange big table,only two person will be invited\n");
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("sorry ".concat(removeGuest, ", you are not invited for dinner"));
}
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear ".concat(guestlist[i], ", you are still invited for dinner"));
}
guestlist.splice(0, 2);
console.log(guestlist);
