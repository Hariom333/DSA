
function linear(arr,number){
    var n = arr.length;
   var i= '';
    for(i=0;i<n;i++){

        if(arr[i]===number){

            return i;
        }
    }
    return -1;

}


console.log(linear([1,2,3,4,5],3));