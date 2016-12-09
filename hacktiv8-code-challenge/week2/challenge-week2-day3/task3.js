function dataHandling2(input) {
    var usingSplice = input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(input);
  
    var bulan = [
                  'Januari',
                  'Februari',
                  'Maret',
                  'April',
                  'Mei',
                  'Juni',
                  'Juli',
                  'Agustus',
                  'September',
                  'Oktober',
                  'November',
                  'Desember'
    ];
    var usingSplit = input[3].split('/');
    console.log(bulan[parseInt(usingSplit[1])-1]);
    
    var sortSplit = usingSplit.sort(function(value1, value2) {
      return value2 - value1;
    });
    console.log(sortSplit);
  
    var joinSplit = usingSplit.join('-');
    console.log(joinSplit);
  
    var limitName = input[1].slice(0, 14);
    console.log(limitName);
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);