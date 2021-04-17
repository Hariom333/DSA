<?php
function sort_0_1_2($user,$n){


for($i=0;$i<=$n-1;$i++){ 

 for($j=$i+1; $j<=$n-1; $j++){

       if($user[$i]>$user[$j]){
       $temp = $user[$j];
       $user[$j] = $user[$i];
       $user[$i]=$temp;  
   }



 }
 
echo $user[$i];

  }

}

$std = [0,1,2,1,0,0,1,2,2,0,1];
$n = count($std);

sort_0_1_2($std,$n);


// time complexity O(n2);
?>