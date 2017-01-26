function ABCheck(str) {
  var word = str.split('');
  for (var i = 0; i < word.length; i++) {
    if(/a/.test(word[i])) {
      if(word[i+4] === 'b' || word[i-4] === 'b') {
        return true;
      }
    }
  }
  return false;
}

console.log(ABCheck('bzzza'));
