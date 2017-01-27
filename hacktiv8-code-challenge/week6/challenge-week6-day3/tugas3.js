var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  return arr.reduce((prev, currentNum, index, array) => {
        console.log(prev);
          return Math.max(currentNum, prev);
  }, 0);
}
console.log(reduceFindMaximum([2, 1, 7, 6, 9, 21])); // 9