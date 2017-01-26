function SwapCase(str) {
  var words  = str.split('');
  var swaped = [];
  for (var i = 0; i < words.length; i++) {
    if (/[a-z]/.test(words[i])) {
      var swapUpper = words[i].replace(words[i], words[i].toUpperCase());
      words[i]      = swapUpper;
    } else if(/[A-Z]/.test(words[i])) {
      var swapLower = words[i].replace(words[i], words[i].toLowerCase());
      words[i]      = swapLower;
    }
  }
  return words.join('');
}

console.log(SwapCase('Hello World'));
