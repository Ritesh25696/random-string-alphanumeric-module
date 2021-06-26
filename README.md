# random-string-alphanumeric-generator
A module that can return various types of random string<br>
[![npm version](https://badge.fury.io/js/random-string-alphanumeric-generator.svg)](https://badge.fury.io/js/random-string-alphanumeric-generator)
![npm](https://img.shields.io/npm/v/random-string-alphanumeric-generator?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/dm/random-string-alphanumeric-generator?style=flat-square)
![GitHub Release Date](https://img.shields.io/github/release-date/ritesh25696/random-string-alphanumeric-module?logo=semantic-release&style=flat-square)
![Maintenance](https://img.shields.io/maintenance/yes/2021?color=%237FFFD4&style=flat-square)

## HOW TO INSTALL
npm install random-string-alphanumeric-generator --save

## HOW TO USE
`var random = require('random-string-alphanumeric-generator');`

`random.randomAlphanumeric(10, "lowercase")`
//Returns b2pdk4bv98

`random.randomLetters(10, "uppercase")`
//Returns ABHUISLCHF

### METHODS

- randomAlphanumeric<br>
Generates a random string of given length<br>
lettersIncluded optional field which can be one of following<br>
all (default): Includes uppercase letters lowercase letters and numbers<br>
lowercase: Includes lowercase letters and numbers<br>
uppercase: Includes uppercase letters and numbers<br>
```
 random.randomAlphanumeric(10, lowercase) // uhf2m363l1
 random.randomAlphanumeric(10, uppercase) // DG8CXMZ21F
 random.randomAlphanumeric(10) // 5hiry73uV8
```

- randomLetters<br>
Generates a random string of given length<br>
lettersIncluded optional field which can be one of following<br>
all (default): Includes uppercase letters lowercase letters and numbers<br>
lowercase: Includes lowercase letters and numbers<br>
uppercase: Includes uppercase letters and numbers<br>
```
  random.randomAlphanumeric(10, lowercase) // aqswedfrtg
  random.randomAlphanumeric(10, uppercase) // KINHBGFYRS
  random.randomAlphanumeric(10) // 5hiry73uV8 // KqjfrQNkth
```

- randomNumber<br>
Generates a random number of given length
```
  random.randomNumber(10) // 4369739553
```

- randomHex<br>
Generates a random hex of given length
Includes only hex characters i.e [0-9 and a-f]
```
  random.randomHex(10) // 1dd12084e3
```

- randomBinary<br>
Generates a random binary string of given length
Includes only binary characters i.e [0 and 1]
```
  random.randomBinary(10) // 1110011111
```

- randomOctal<br>
Generates a random octal string of given length
Includes only octal characters i.e [0-7]
```
  random.randomOctal(10) // 2350150766
```

- customRandomString<br>
Generates a random string of given length
Includes only characters given in customCharSet
```
  random.customRandomString(10, abcdef) // eadefcaffb
```

- getRandomPassword<br>
Generates a random string of given length
Includes numbers, small letters, capital letters and special characters
Second optional param as minimum number of special characters required
```
  random.getRandomPassword(10)     // JkCtzL*!Pd
  random.getRandomPassword(10, 2)  // $)FN3A#dP^
```

- getRandomPasswordStrict<br>
Generates a random string of given length
Includes numbers, small letters, capital letters and special characters
second optional param as fixed number of special characters required
```
  random.getRandomPasswordStrict(10, 3) // #TUjLFgdRg
```

- getRndFloat<br>
Generates random float between min(included) and max(excluded) numbers.
Min: Default is 0
Max: Default is 1
Third optional param as number of digits after the decimal point default is 4
```
  random.getRndFloat(4, 5, 3) // 4.304
```

- getRndInteger<br>
Returns random integer between min(included) and max(excluded) numbers.
Min: Default is 0
Max: Default is 100
```
  random.getRndInteger(5, 50) // 7
```

- getRndBoolean<br>
Generates random boolean true or false.
```
  random.getRndBoolean() // True or False
```