<?php

function maximun($arr,$n){
 $max = $arr[0];

	for($i=1;$i<=$n-1; $i++){
            
            if($max<$arr[$i]){
     
              $temp = $max;
              $max = $arr[$i];
              $arr[$i] = $max;
                   //if any element is greater than current element than swap;

            }		
	}
echo "this is maximun number ".$max;

}


$arr = [2,31,91,5,21,0];
$n = sizeof($arr);
maximun($arr,$n);


//time complexity O(n)  , done in single loop
?>