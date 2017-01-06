function rekursiDeretPerkalian(angka) {
    if(angka == 1) {
        return 1;
    }

    return angka * rekursiDeretPerkalian(angka-1);
}

function rekursiDeretPerkalianDenganSelisih(angka, selisih) {
    if(angka <= 0) {
        return 1;
    }
    return angka * rekursiDeretPerkalianDenganSelisih(angka-selisih, selisih);
}

console.log(`Hasil hitung deret perkalian :` + rekursiDeretPerkalian(5));
console.log(`Hasil hitung deret perkalian dengan selisih:` + rekursiDeretPerkalianDenganSelisih(12, 5));
