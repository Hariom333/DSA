<?php
//input[1,3,2] =  3 max

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

function minimun($arr,$n){
$min = $arr[0];

	for($i=1;$i<=$n-1;$i++){
		if($min>$arr[$i]){
           $temp = $min;
           $min = $arr[$i];
           $arr[$i] = $temp;

		}
	}
echo "this is smallest element " . $min;

}



function traverse($arr,$n){
	for($i=0;$i<=$n-1;$i++)
	{
		echo $arr[$i].  '  ';
	}
}


$arr = [2,31,91,5,21,10];
$n = sizeof($arr);

echo "<br>";
maximun($arr,$n);
echo "<br>";
minimun($arr,$n);

echo "<br>";
echo ' this is our element ',traverse($arr,$n);

//time complexity O(n)  , done in single loop
?>