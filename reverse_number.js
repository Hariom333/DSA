//--- for loop ---//

function reverse(n){
var index= 0;
newArray = [];

for(i=10; i>=0; i--){

    newArray[index] = i;
    index++; 
}
return newArray;

}

var number  = 9;

//console.log(reverse(number));

//-----while loop ----------//


function reverse_no(n){

var i = 0;
var newArray = [];

while(n>=0){
 newArray[i] =n;

 n--;
i++;
}
return newArray;

}


console.log(reverse_no(6));