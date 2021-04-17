
<?php

function kmax($arr,$n,$k){
//arrange discending;

for($i=0; $i<=$n-1; $i++){

     for($j=$i+1; $j<=$n-1;$j++){

        if($arr[$i]<$arr[$j]){
             $temp = $arr[$j];
             $arr[$j] = $arr[$i];
             $arr[$i] = $temp;
                       //assign value of arry
        }
     }


}
// return $new_arr[$k];
    echo 'this is '.$k.'nd highest element '. $arr[$k-1];

}


function kmin($arr,$n,$k){

for($i=0;$i<=$n-1;$i++){
  
  for($j=$i+1; $j<=$n-1; $j++){

   if($arr[$i]>$arr[$j]){
       
       $temp = $arr[$i];
       $arr[$i] = $arr[$j];
       $arr[$j] = $temp; 

   }

   }

  /* echo $arr[$i] . ' ' ;*/

}

echo "<br>";
echo 'this is '.$k.'nd smallest element ' . $arr[$k-1];
 
}


function traverse($arr,$n){

    for($i=0; $i<=$n-1; $i++){
          echo $arr[$i].' ';        
    }

}


$arr = [2,3,9,4,0,1,8];
$n = count($arr);
$k =2;

   echo "this is full array ",traverse($arr,$n);
 echo "<br>";
 kmax($arr,$n,$k);

 kmin($arr,$n,$k);

?>