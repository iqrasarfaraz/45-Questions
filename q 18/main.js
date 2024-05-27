// 18 
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// solution->
var visitingPlaces = ["Pakistan", "India", "UAE", "Canada", "Chaina"];
console.log("original order", visitingPlaces);
console.log(" Alphabetical order", __spreadArray([], visitingPlaces, true).sort());
console.log("original order", visitingPlaces);
console.log("reverse alphabetical order", __spreadArray([], visitingPlaces, true).sort().reverse());
console.log("original order", visitingPlaces);
visitingPlaces.reverse();
console.log("reversed order", visitingPlaces);
visitingPlaces.reverse();
console.log("orginal order", visitingPlaces);
console.log("sorted in alphabeical order", visitingPlaces.sort());
console.log("sorted in reversed alphabeical order", visitingPlaces.reverse());
