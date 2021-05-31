function print(start, end){

    newArray = [];
while(start<end){
 newArray[start] = start;
start++;
}

return newArray;

}

console.log(print(1,10));