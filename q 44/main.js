//solution
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwitch Summary");
    if (items.length === 0) {
        console.log("no items selected . please add some items to your sandwitch.");
    }
    else {
        console.log("     -Your sandwitch contains:");
        items.forEach(function (item) { return console.log("       -".concat(item)); });
    }
    console.log();
}
// call the function three times with a different number of arguments each time
makeSandwich("ham", "cheese", "lettuce", "Tommato");
makeSandwich("Turkey", "Swiss cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
//solution
