<?php

function reverse(&$arr,$start,$end){
// taking as reference  so taht array can modifi
	while($start<$end){
       
       $temp = $arr[$start];
       $arr[$start] = $arr[$end];
       $arr[$end] = $temp;
       $start++;
       $end--;

	}

}

function traverse($arr,$n){
	for($i=0;$i<$n-1; $i++){
		echo $arr[$i].' ' ;
	}


}


$std = [2,3,14,5,8,1];
// array is reverse by passong reference
//if we print simple array we got reverse array;

$n =count($std); 

reverse($std,0,$n-1);
traverse($std,$n);

?>