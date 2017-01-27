var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
  return arr.filter((data) => {
      return data > 10;
  });
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]