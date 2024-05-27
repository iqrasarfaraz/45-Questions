//solution
function makeShirt(size:string= "large", message:string ="I Love typscript"){
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`); 
}
//large shirt with a default message:
makeShirt();

//medium sirt wit a default message;
makeShirt("medium");

//create a shirt of any size with a different message:
makeShirt("small", "typscript is awesome!");