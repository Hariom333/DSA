//--------------------- understand the problem ---------------------..//
// sum of running 1D array-- (estate your own words)
// what is input  = [1,2,3];
// what is output = [1,3,6];


//----- pseaudo code -----------------//

// create a variable to keep track of the running sum/tally
// create a new  array to store our updated values
// iterate through the nums array
    // for every iteration, increment the running sum
    // then update the value of the current index to be the running sum

// return the array of running sums


function suml(arr){

var n = arr.length;
var i = '';
var sumArray = [];
var sum = 0;
//first we apply the loop
for(i=0; i<n;i++){


      //add previsous term to its next term
    sum =  sum + arr[i]
      sumArray[i] = sum;

}
return sumArray;

}


var stg = [2,2,2,2];

console.log(suml(stg));

