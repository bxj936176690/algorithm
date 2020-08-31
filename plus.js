var twoSum = function(nums, target) {
  const other = {}
  for (var i = 0; i < nums.length; i++) {
      const diff = target - nums[i]
      if (other[diff] !== undefined) {
          return [i, other[diff]]
      }
      other[nums[i]] = i
  }
};