function hitungDeretPerkalian(angka) {
    var hasil = angka;
    for (var i = 1; i < angka; i++) {
        hasil *= (angka-i);
    }
    return hasil;
}

function hitungDeretPerkalianDenganSelisih(angka, selisih) {
    var hasil = angka;
    var deret = angka;
    for (var i = 0; i < angka; i++) {
        deret -= selisih;
        if (deret > 0) {
            hasil *= deret;
        }
    }

    return hasil;
}

console.log("Hasil hitung deret perkalian :" + hitungDeretPerkalian(5));
console.log("Hasil hitung deret perkalian dengan selisih:" + hitungDeretPerkalianDenganSelisih(16, 5));
