function DashInsert(str) {
  var number = str.split('');
  for (var i = 0; i < number.length; i++) {
    if(number[i]%2 === 1 && number[i+1]%2 === 1) {
      number.splice(i+1,0,'-');
    }
  }
  return number.join('');
}
console.log(DashInsert('99946'));
