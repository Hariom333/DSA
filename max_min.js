function max(arr){

    var maximum = arr[0];
    var n = arr.length;

    for(i=1;i<n;i++){
           
        if(maximum<arr[i])
        {
            maximum =  arr[i];
        }

    }
    return maximum;
}


function min(arr){

    var minimum = arr[0];
 var n = arr.length;

for(i=1; i<n ; i++){

    if(minimum>arr[i]){
 minimum = arr[i];

    }

}

return minimum;

}




var arr = [2,3,4,1,22]
console.log(min(arr));