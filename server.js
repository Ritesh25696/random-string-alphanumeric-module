var utils = require("./utils");

module.exports = {
  /**
   * Generates a random string of given length
   * @param length Length of random string to be generated
   * @param lettersIncluded optional field which can be one of following
   * all (default): Includes uppercase letters lowercase letters and numbers
   * lowercase: Includes lowercase letters and numbers
   * uppercase: Includes uppercase letters and numbers
   * @returns Random alpha numeric sting of given length
   */
  randomAlphanumeric: function (length, lettersIncluded = "all") {
    var string = "";
    switch (lettersIncluded) {
      case "lowercase":
        string = "abcdefghijklmnopqrstuvwxyz1234567890";
        break;
      case "uppercase":
        string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        break;
      default:
        string =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        break;
    }

    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random string of given length
   * @param length Length of random string to be generated
   * @param lettersIncluded optional field which can be one of following
   * all (default): Includes uppercase letters lowercase letters and numbers
   * lowercase: Includes lowercase letters and numbers
   * uppercase: Includes uppercase letters and numbers
   * @returns Random sting of given length
   */
  randomLetters: function (length, lettersIncluded = "all") {
    var string = "";
    switch (lettersIncluded) {
      case "lowercase":
        string = "abcdefghijklmnopqrstuvwxyz";
        break;
      case "uppercase":
        string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      default:
        string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        break;
    }

    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random string of number of given length
   * Includes only numbers
   * @param length Length of random string to be generated
   * @returns Random string of numbers of given length
   */
  randomNumber: function (length) {
    var string = "1234567890";
    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
      if (str === "0") {
        i--;
        str = "";
      }
    }
    return str;
  },

  /**
   * Generates a random hex of given length
   * Includes only hex characters i.e [0-9 and a-f]
   * @param length Length of random string to be generated
   * @returns Random string of given length
   */
  randomHex: function (length) {
    var string = "abcdef0123456789";
    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random binary string of given length
   * Includes only binary characters i.e [0 and 1]
   * @param length Length of random string to be generated
   * @returns Random string of given length
   */
  randomBinary: function (length) {
    var string = "01";
    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random octal string of given length
   * Includes only octal characters i.e [0-7]
   * @param length Length of random string to be generated
   * @returns Random string of given length
   */
  randomOctal: function (length) {
    var string = "01234567";
    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random string of given length
   * Includes only characters given in customCharSet
   * @param length Length of random string to be generated
   * @param customCharSet Character set from which random string will be created
   * @returns Random string of given length
   */
  customRandomString: function (length, customCharSet) {
    var string = customCharSet;
    var str = "";
    var i = 0;
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return str;
  },

  /**
   * Generates a random string of given length
   * Includes numbers, small letters, capital letters and special characters
   * @param length Length of random string to be generated
   * @param minSpecialChar Minimum number of special characters required
   * @returns Random string of given length
   */
  getRandomPassword: function (length, minSpecialChar) {
    var specialCharString = "!@#$%^&*()";
    var string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    var str = "";
    var i = 0;
    while (i < minSpecialChar) {
      str += specialCharString.charAt(
        Math.floor(Math.random() * specialCharString.length)
      );
      i++;
    }
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return utils.shuffleString(str);
  },

  /**
   * Generates a random string of given length
   * Includes numbers, small letters, capital letters and special characters
   * @param length Length of random string to be generated
   * @param totalSpecialChar Fixed number of special characters required
   * @returns Random string of given length
   */
  getRandomPasswordStrict: function (length, totalSpecialChar) {
    var specialCharString = "!@#$%^&*()";
    var string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var str = "";
    var i = 0;
    while (i < totalSpecialChar) {
      str += specialCharString.charAt(
        Math.floor(Math.random() * specialCharString.length)
      );
      i++;
    }
    while (i < length) {
      str += string.charAt(Math.floor(Math.random() * string.length));
      i++;
    }
    return utils.shuffleString(str);
  },

  /**
   * Returns random float between min(included) and max(excluded) numbers.
   * @param min Minimum number default as 0
   * @param max Maximum number default as 1
   * @param decimalPlaces The number of digits after the decimal point default is 4
   * @returns Random number in given range
   */
  getRndFloat: function (min = 0, max = 1, decimalPlaces = 4) {
    console.log(`min is ${min} and max is ${max}`);
    console.log(`random number is ${Math.random()}`);
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  },

  /**
   * Returns random integer between min(included) and max(excluded) numbers.
   * @param min Minimum number default as 0
   * @param max Maximum number default as 100
   * @returns Random number in given range
   */
  getRndInteger: function (min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  /**
   * Generates random boolean true or false
   * @returns boolean true or false
   */
  getRndBoolean: function () {
    return Math.random() < 0.5;
  }
};
