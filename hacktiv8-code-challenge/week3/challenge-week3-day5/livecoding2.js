/*
HACKTIV8 Online Live Coding 2

Nama: Danang Aji T (END 15.40)

===============
The ABC Murders
===============

Sebuah detektif bernama Poirot sedang melacak pelaku
pembunuhan yang membunuh orang yang seluruh awal nama-nya
mengandung huruf yang sama dengan awal nama kota. Nama kota
hanya akan mengandung satu kata, tidak lebih.

Misalkan nama kotanya "A"ndover, maka awal nama kota = A.
Seseorang dengan nama "A"lice "A"scher, yang nama depan dan belakangnya
mengandung A, akan menjadi target pembunuhan.

Di kota yang sama, "M"ichael "A"methyst, karena nama belakangnya A
namun nama depannya M, maka tidak menjadi target pembunuhan.

Contoh Pola pembunuhan pelaku:

Nama:Alice Ascher,            Kota:Andover   => true
Nama:Betty Barnard,           Kota:Bexhill   => true
Nama:Charlotte Clarke,        Kota:Churston  => true
Nama:Charlotte Clarke,        Kota:Bexhill   => false
Nama:Michael Amethyst,        Kota:Andover   => false
Nama:Betty Barnard,           Kota:Texhill   => false
Nama:Betty Barnard Barnacle,  Kota:Bexhill   => true
Nama:Cathy Barnard Barnacle,  Kota:Bexhill   => false

[PERINTAH]
Kamu hanya perlu mengubah code di bagian dalam fungsi!
Buatlah sebuah fungsi bernama isKillerTarget.
isKillerTarget adalah sebuah function yang menerima satu parameter berupa
string dengar format "Nama:[NAMA LENGKAP],Kota:[NAMA KOTA]",
dan mengembalikan nilai berupa boolean (true atau false).

Sample input 1: "Nama:Alice Ascher,Kota:Andover"
Hasil: true

Sample input 2: "Nama:Michael Amethyst,Kota:Andover"
Hasil: false
*/

function isKillerTarget(civilianIDParam) {
  // Code here!
  var civilian = civilianIDParam.split(',')[0];
  var city = civilianIDParam.split(',')[1];
  var civilianName = civilian.split(':')[1];
  var cityName = city.split(':')[1];
  var nameSplit = civilianName.split(' ');
  var comparationCounter = 0;
  for(var i=0;i<nameSplit.length;i++) {
      if(nameSplit[i].charAt(0) === cityName.charAt(0)) {
          comparationCounter += 1;
    }
  }
   if(comparationCounter === nameSplit.length) {
      return true;
   } else {
      return false;
   }
}

//bagian ini tidak boleh diubah/dihapus
var civilianID1 = "Nama:Alice Ascher,Kota:Andover";
console.log(isKillerTarget(civilianID1));

var civilianID2 = "Nama:Michael Amethyst,Kota:Andover";
console.log(isKillerTarget(civilianID2));

var civilianID3 = "Nama:Cathy Barnard Barnacle,Kota:Bexhill";
console.log(isKillerTarget(civilianID3));

var civilianID4 = "Nama:Bethy Barnard Barnacle,Kota:Bexhill";
console.log(isKillerTarget(civilianID4));
//bagian ini tidak boleh diubah/dihapus
