function bubble(arr){

    var n = arr.length;
    
        for(i=0;i <n; i++){
    
            for(j=0;j<n;j++){
    
                  if(arr[j]>arr[j+1]){
                      
                      temp = arr[j];
                      arr[j] = arr[j+1];
                      arr[j+1] = temp;
    
                  }
    
            }
    
        }
    
    return arr;
    
    }
    
    
    var arr = [1,23,45,4,5,6];
     document.write(bubble(arr));