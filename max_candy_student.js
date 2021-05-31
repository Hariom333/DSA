function max_candy(std,max_candies){
// var n = std.length;
var val = "";
var max = 0;
 var n = std.length; 

 for(i=0;i<n; i++){
  
   if(max<std[i])
   {
       return false
   }
 

}
return max;

}


var arr = [1,2,3,52,6,12,21];
max_candies = 1;
max_candy(arr,max_candies);

document.write(max_candy(arr,max_candies));