// 33. ordinal Number : Ordinals numbers indicate their position in a array , such as 1st or 2nd . Most ordinal numbers end the , except 1,2 and 3.
//. Store the number 1 though 9 in a array.
//. loop[ though the array.
// . use an if -else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be onn a seprate line

//' solution=>

    let number:number[]= [1,2,3,4,5,6,7,8,9];
    for (let i of number){
        if  (i===1){
            console.log(`${i}st`)
        }else if (i===2){
            console.log(`${i}nd`);
        } else if(i===3){
            console.log(`${i}rd`);
        }else{
            console.log(`${i}th`);
        }
        
    }