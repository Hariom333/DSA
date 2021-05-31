//--------- for loop -----------

function even(start, end){
   var  newArray = [];
    for(start; start<=end; start++){

        if(start%2==0){
              newArray.push(start);
        }
    }
    
    return newArray;

}


//---------while------//

function even_no(start,end){
    newArray = [];
while(start<=end){
    if(start%2 !=0){
        newArray.push(start);
    }
    start++
}
return newArray;
}
console.log(even_no(1,100));