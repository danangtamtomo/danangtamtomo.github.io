function LargestPair(num) {
  var pairs = [];
  var number = num.toString();
  for(var i=0;i<number.length;i++) {
    if(i!==number.length-1) {
      var toNum = parseInt(number[i]+number[i+1]);
      pairs.push(toNum);
      console.log(pairs);
    }
  }
  pairs.sort(function(a, b) {
     return b-a;
  });
  return pairs[0];
}
