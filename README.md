# random-string-alphanumeric-generator
A module that can return various types of random string

## HOW TO INSTALL
npm install random-string-alphanumeric-generator --save

## HOW TO USE
var random = require('random-string-alphanumeric-generator');

`console.log(random.randomAlphanumeric(10, "lowercase"))`
//Returns b2pdk4bv98

`console.log(random.randomLetters(10, "uppercase"))`
//Returns ABHUISLCHF

```javascript
### METHODS

## getRndFloat

/*
Returns random float between min(included) and max(excluded) numbers.
@param min Minimum number default as 0
@param max Maximum number default as 1
@param decimalPlaces The number of digits after the decimal point default is 4
*/

## getRndInteger

/**
Returns random integer between min(included) and max(excluded) numbers.
@param min Minimum number default as 0
@param max Maximum number default as 100
@returns Random number in given range
 */

## randomAlphanumeric

/* 
This method generates a random string of given length.
@param length Length of random string to be generated.
@param lettersIncluded optional field which can be one of following:
all (default): Includes uppercase letters lowercase letters and numbers i.e [a-z and A-Z].
lowercase: Includes lowercase letters and numbers i.e [a-z].
uppercase: Includes uppercase letters and numbers i.e [A-Z].
 */

## randomLetters

/*
This method generates a random string of given length.
@param length Length of random string to be generated.
@param lettersIncluded optional field which can be one of following:
all (default): Includes uppercase letters lowercase letters and numbers i.e [a-z and A-Z].
lowercase: Includes lowercase letters and numbers i.e [a-z].
uppercase: Includes uppercase letters and numbers i.e [A-Z].
*/ 

## randomNumber
    
/*
This method generates a random string of number of given length.
Includes only numbers i.e [0-9].
@param length Length of random string to be generated. 
*/

## randomHex

/*
This method generates a random hex of given length.
Includes only hex characters i.e [0-9 and a-f].
@param length Length of random string to be generated.
*/

## randomBinary

/*
This method generates a random binary string of given length.
Includes only binary characters i.e [0 and 1].
@param length Length of random string to be generated.
*/

## randomOctal

/*
This method generates a random octal string of given length.
Includes only octal characters i.e [0-7].
@param length Length of random string to be generated.
*/

## customRandomString

/*
This method generates a random string of given length.
Includes only characters given in customCharSet.
@param length Length of random string to be generated.
@param customCharSet Character set from which random string will be created.
*/

## getRandomPassword

/*
This method generates a random string of given length.
Includes numbers, small letters, capital letters and special characters i.e [a-z, A-Z, 0-9 and !@#$%^&*()].
@param length Length of random string to be generated.
@param minSpecialChar Minimum number of special characters required.
*/

## getRandomPasswordStrict

/*
This method generates a random string of given length.
Includes numbers, small letters, capital letters and fixed number of special characters i.e [a-z, A-Z, 0-9 and !@#$%^&*()].
@param length Length of random string to be generated.
@param totalSpecialChar Fixed number of special characters required.
*/

