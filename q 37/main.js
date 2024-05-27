//solution
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love typscript"; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
//large shirt with a default message:
makeShirt();
//medium sirt wit a default message;
makeShirt("medium");
//create a shirt of any size with a different message:
makeShirt("small", "typscript is awesome!");
