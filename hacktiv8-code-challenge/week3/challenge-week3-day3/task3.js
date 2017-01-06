function Palindrome(str) {
    var strTemp = str;
    var noWhitespace = str.replace(/ /g,'');
    var spl = noWhitespace.split('');
    var reverse = spl.reverse().toString();

    if(reverse === strTemp.replace(/ /g,'').split('').toString()) {
        return 'true';
    } else {
        return 'false';
    }


}
