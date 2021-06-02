//pseudo code


//[1,2,3,2,3,4]   = (2,2) (3,3) = total 2 pair match =  output = 2

function calculate(arr){

    var n = arr.length;
    var count =0;

    for(i=0; i<n; i++){


      for(j=i+1;j<n; j++){
            
              if(arr[i]==arr[j]){
                  var count = count+1;
              }
        }
  
   }

   return count;

}


var arr = [1,2,3,7,3,2];
document.write(calculate(arr));