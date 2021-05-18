module.exports = {
    randomAlphanumericByLength: function(length){
        var string = "abcdefghijklmnopqrstuvwxyz1234567890";
        var str = '';
        var i = 0;
        while(i < length){
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    }
}