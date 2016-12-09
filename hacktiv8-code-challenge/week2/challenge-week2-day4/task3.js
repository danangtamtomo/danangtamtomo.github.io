var Object1 = {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
}

var Object2 = {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
}

var Object3 = {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
}

var sebuahArray = [Object1, Object2, Object3];

for(var i=0;i<sebuahArray.length;i++) {
  console.log(`Hari: ${sebuahArray[i].hari}`);
  console.log(`Kehadiran: ${sebuahArray[i].kehadiran}`);
  if(sebuahArray[i].alasan) {
     console.log(`Alasan: ${sebuahArray[i].alasan}`);
  }
  console.log('');
}