// input  = [1,2,3,4,5,6] = [1,4,2,5,3,6]
//


var shuffle = function (nums, n) {
    let res = [];
  
    for (let i = 0; i < n; i++) {
      res.push(nums[i], nums[n + i]);
    }
  
    return res;
  };
  
  
  
  var nums = [1,2,3,4,5,6];
  var n = nums.length/2;
  document.write(shuffle(nums,n));