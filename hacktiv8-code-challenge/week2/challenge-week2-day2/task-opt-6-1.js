/**
TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"
 */
 
var total = 0;

for(var i = 1;i<=100;i++) {
    if(i%2 !== 0) {
        total+=i;
    } else {
        total-=i;
    }
}

console.log(total);
