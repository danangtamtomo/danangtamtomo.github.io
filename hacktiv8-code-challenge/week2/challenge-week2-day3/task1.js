function balikString(kata) {
    var kebalikan = '';
    for(var i=kata.length-1;i>=0;i--) {
        kebalikan+=kata[i];
    }
    return kebalikan;
}

console.log(balikString('Hello, world!'));