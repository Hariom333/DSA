//  ---------for loop-----------------//


function print_number(n){
  
    var i;
   newArray = [];
    for(i=0; i<n; i++){

        newArray[i] = i;

    }

    return newArray;
}




//----------while loop -------------------//

function print_no(n){
var i = 0;
var newArray = [];
while(i<=n){
newArray[i] = i;
i++;
}
return newArray;
}

var n = 7;
console.log(print_no(n));


