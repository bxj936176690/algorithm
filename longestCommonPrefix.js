var longestCommonPrefix = function(strs) {
  const result = ''
  if(strs.length == 0) 
      return result
  var first = strs[0]
  for(var i =1;i<strs.length;i++) {
      var j=0
      for(;j<first.length && j < strs[i].length;j++) {
          if(first[j] != strs[i][j])
              break
      }
      first = first.substr(0, j)
      if(first === "")
          return first
  }
  return first
};

