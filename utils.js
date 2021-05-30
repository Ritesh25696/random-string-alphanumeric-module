module.exports = {
    shuffleString: function (str) {
      var shuffled = str.split('').sort(function() {
      return 0.5-Math.random(0, 1)
    }).join('');
    return shuffled;
    }
}   