"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//solution
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return magician + (" the Great ".concat(magician)); });
}
var magician_names = ["Iqra", "noor", "misbah", "saba", "samina"];
var great_magicians = make_great(__spreadArray([], magician_names, true)); //creating a copy using the spread operator
//show the original magician names
console.log("Original Magicians:");
show_magicians(magician_names);
//show the modified magician names
console.log("\nGreat magicians:");
show_magicians(great_magicians);
