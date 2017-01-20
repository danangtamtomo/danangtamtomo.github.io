function BreakNameCode(code) {
  var splitCode = code.split('');
  var posOfCode = [];
  var codeSequence = ['C','O','D','E'];
  // var matchCode = code.match(/[CODE]/g);
  // if(/[CODE]/g.test(code)) return "Wrong Code";
  var eva = splitCode.slice();
  for(var i=0;i<codeSequence.length;i++) {
    for (var j = 0; j < eva.length; j++) {
      // console.log(splitCode[j] === codeSequence[i]);
        // console.log(splitCode[j],splitCode[j] === codeSequence[i] && typeof posOfCode[i] === 'undefined' );
      if(eva[j] === codeSequence[i] && typeof posOfCode[i] === 'undefined' ) {
        posOfCode.push([eva[j], code.indexOf(eva[j])]);
        eva = eva.slice(code.indexOf(splitCode[j]), splitCode.length);
        console.log(code.indexOf(splitCode[j]));
        // console.log(code.indexOf(splitCode[j]),splitCode.length);
        console.log(eva.toString());
      }
    }
  }

  var result = "";
  for (var k = 0; k < posOfCode.length; k++) {
    if(k === posOfCode.length-1) {
      result += codeSequence[k]+code.substr(posOfCode[k][1]+1, code.length-posOfCode[k][1]).toLowerCase();
    } else {
      result += codeSequence[k]+code.substr(posOfCode[k][1]+1, posOfCode[k+1][1]-(posOfCode[k][1]+1)).toLowerCase()+' ';
    }
  }
  console.log(posOfCode);
  return result;
}

console.log(BreakNameCode("CHARLESOXDONEULER"));
