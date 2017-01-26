function PowersofTwo(num) {
  while(num >= 2) {
      console.log(num);
      if(num === 2) {
          return 'true';
      }
      num /= 2;
  }
  return 'false';
}

console.log(PowersofTwo(16));
