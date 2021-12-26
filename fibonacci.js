// problem : Fibonacci Series.
// input : 4
//output : 0, 1, 1, 2, 3, 5, 8, 13, 21,
// logic: previous term add with nxt term


function Fibonacci(num){

  var num1 = 0;
  var num2 = 1;
  var num3;
   
  if(num<0){
    return 'enter positive number'
  }
   else{
          var newArray = [];
          newArray[0] = num1;
          newArray[1] = num2;

          var total = 0;
           for(i= 2; i< num; i++){
           newArray[i] = num1+num2;                
           
             var temp = num1;
              num1 = num2;
              num2 = newArray[i];
            
           }
           return newArray;

   }


}


const number = parseInt(prompt('enter positive number'));


document.write(Fibonacci(number));  