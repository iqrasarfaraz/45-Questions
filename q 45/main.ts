//solution =>
    type car = {
        manfacture:string,
        model:string,
        [key:string]:any
    }
function createCar(manfacture:string, model :string,optional:Record< string, any>):car{
    return {
        manfacture,
        model,
       ...optional
    }
}

const myCar :car= createCar('toyota','corolla',{color:'red',year:2024});

console.log(myCar);
