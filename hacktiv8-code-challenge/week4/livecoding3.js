function BreakNameCode(code) {
  var splitCode = code.split('');
  var posOfCode = [];
  var codeSequence = ['C','O','D','E'];
  var eva = splitCode.slice();
  var limiter = 0;
  for(var i=0;i<codeSequence.length;i++) {
    var isThere = false;
    for (var j = limiter; j < splitCode.length; j++) {
      if(splitCode[j] === codeSequence[i] && typeof posOfCode[i] === 'undefined' ) {
        posOfCode.push([splitCode[j], j]);
        limiter = j;
        isThere = true;
      }
    }
    if(isThere === false) return false;
  }

  var result = "";
  for (var k = 0; k < posOfCode.length; k++) {
    if(k === posOfCode.length-1) {
      result += code.charAt(posOfCode[k][1])+code.substr(posOfCode[k][1]+1, code.length-posOfCode[k][1]).toLowerCase();
    } else {
      result += code.charAt(posOfCode[k][1])+code.substr(posOfCode[k][1]+1, posOfCode[k+1][1]-(posOfCode[k][1]+1)).toLowerCase()+' ';
    }
  }
  return result;
}

console.log(BreakNameCode("CHARLESOXDONEULER"));
