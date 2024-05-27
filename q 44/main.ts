//solution
function makeSandwich (...items:string[]): void {
    console.log("sandwitch Summary");
    if (items.length === 0){
        console.log("no items selected . please add some items to your sandwitch.");
    }else {
        console.log("     -Your sandwitch contains:");
        items.forEach(item => console.log(`       -${item}`));
    }
    console.log();
}
// call the function three times with a different number of arguments each time

makeSandwich("ham" ,"cheese","lettuce","Tommato");
makeSandwich("Turkey","Swiss cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");

//solution