function binarySearch(arr,key){
    var start = 0; 
    var end = arr.length-1;  //7
    

    while(start<=end){  //0<7
    
    var mid = Math.floor((start+end)/2);

    
        if(arr[mid]===key){
            
            return mid;
        }
        else if(arr[mid]<key){
            start = mid+1;
        }
        else if(arr[mid]>key){
            end = mid-1;
            
        }
        
        
    }
   // return -1;
 
}


var arr = [1,2,3,4,6,8,9];
var val = 6;

document.write(binarySearch(arr,val));