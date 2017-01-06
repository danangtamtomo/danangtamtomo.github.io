function OtherProducts(arr) { 
    var newProducts = [];
    var arrTemp = arr.slice();
    
  for(var i=0;i<arr.length;i++) {
      
      arr.splice(i,1);

      var newValue = 1;
      for(var j=0;j<arr.length;j++) {
          newValue *= arr[j];
          console.log(arr[j]);
      }
      newProducts.push(newValue);
      newValue = 0;
      arr = arrTemp.slice();
  }
  var hypenedProducts = '';
  for(var index = 0;index<newProducts.length;index++) {
      var nProducts = index === newProducts.length-1 ? newProducts[index] : newProducts[index]+'-';
      hypenedProducts += nProducts;
  }
  
  return hypenedProducts; 
}
