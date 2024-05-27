"use strict";
//storing a person nmae in a variable
let personName = "iqra sarfaraz";
//printing a person name in lowercase
console.log("LowerCase:", personName.toLowerCase());
//printing a person name in lowercase
console.log("Uppercase:", personName.toUpperCase());
//printing a person name in lowercase
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
