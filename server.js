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
     randomAlphanumeric: function (length, lettersIncluded = 'all') {
        var string = '';
        switch (lettersIncluded) {
            case "lowercase":
                string = "abcdefghijklmnopqrstuvwxyz1234567890";
                break;
            case "uppercase":
                string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                break;
            default:
                string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
                break;
        }

        var str = '';
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
    randomLetters: function (length, lettersIncluded = 'all') {
        var string = '';
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

        var str = '';
        var i = 0;
        while (i < length) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    },

    /**
     * Generates a random number of given length
     * Includes only numbers
     * @param length Length of random string to be generated
     * @returns Random number of given length
     */
    //TOD: Check and change return type to string
    randomNumber: function (length) {
        var string = "1234567890";
        var str = '';
        var i = 0;
        while (i < length) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
            if (str === '0') {
                i--;
                str = '';
            }
        }
        return parseInt(str);
    },

    /**
     * Generates a random hex of given length
     * Includes only hex characters i.e [0-9 and a-f]
     * @param length Length of random string to be generated
     * @returns Random string of given length
     */
    randomHex: function (length) {
        var string = "abcdef0123456789";
        var str = '';
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
        var str = '';
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
        var str = '';
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
        var str = '';
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
    // TODO: Add shuffle util function so that special chars are not at front
    getRandomPassword: function (length, minSpecialChar) {
        var specialCharString = "!@#$%^&*()";
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
        var str = '';
        var i = 0;
        while (i < minSpecialChar) {
            str += specialCharString.charAt(Math.floor(Math.random() * specialCharString.length));
            i++;
        }
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
     * @param totalSpecialChar Fixed number of special characters required
     * @returns Random string of given length
     */
    // TODO: Add shuffle util function so that special chars are not at front
    getRandomPasswordStrict: function (length, totalSpecialChar) {
        var specialCharString = "!@#$%^&*()";
        var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        var str = '';
        var i = 0;
        while (i < minSpecialChar) {
            str += specialCharString.charAt(Math.floor(Math.random() * specialCharString.length));
            i++;
        }
        while (i < length) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++;
        }
        return str;
    }
}