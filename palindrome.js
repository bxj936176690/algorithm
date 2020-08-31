var isPalindrome = function(x) {
  const rever = Number((x + '').split('').reverse().join(''))
  if (rever === x) {
      return true
  } else {
      return false
  }
};
