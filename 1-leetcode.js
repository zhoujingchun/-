/**
 * 功能：
 * 作者：zhoujingchun
 * 日期：
 */

/*8*/

var twoSum = function(nums, target) {
  const map = new Map;
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) return [i,map.get(nums[i])]
    map.set(target - nums[i], i)
  }
};
let nums = [1, 2, 3, 4],
  target = 5

console.log(twoSum(nums,target));
