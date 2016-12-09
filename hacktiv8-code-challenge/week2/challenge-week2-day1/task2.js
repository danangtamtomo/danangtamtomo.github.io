var nama = 'Danang';
var peran = 'Penyihir';
if(nama === ' ') {
  console.log('Nama tidak boleh kosong');
} else {
  console.log('Selamat datang di Dunia Proxytia, '+nama);
}

if(peran === 'Ksatria') {
  console.log('Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!');
} else if(peran === 'Tabib') {
  console.log('Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.');
} else if(peran === 'Penyihir') {
  console.log('Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Pilih peranmu untuk memulai game');
}

