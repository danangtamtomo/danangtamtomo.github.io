for(var i = 1;i<=100;i++) {
  if(i%2==0) {
    console.log(i+' GENAP');
  } else {
    console.log(i+' GANJIL');
  }
}

for(var i = 1;i<=100;i+=2) {
  if(i%3==0) {
    console.log(i+' KELIPATAN 3');
  }
 
  console.log('');
}

for(var i = 1;i<=100;i+=5) {
  if(i%6==0) {
    console.log(i+' KELIPATAN 6');
  }
 
  console.log('');
}

for(var i = 1;i<=100;i+=9) {
  if(i%10==0) {
    console.log(i+' KELIPATAN 10');
  }
 
  console.log('');
}