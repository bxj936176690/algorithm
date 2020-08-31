var reverse = function(x) {
  var str = x.toString()
  var first = ''
  if (str[0] === '-') {
      first = '-'
      str = str.substr(1)
  }
  const result = str.split('').reverse().join('')
  let returnResult = ''
  if (first) {
      returnResult = Number(first + result)
  } else {
      returnResult = result * 1
  }
  const max = Math.pow(2,31)
  if (!(Number('-' + max) <= returnResult && returnResult <= (max - 1))) {
      return 0
  } else {
      return returnResult
  }
};