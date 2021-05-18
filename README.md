# random-string-alphanumeric-generator
A module that can return various types of random string

## HOW TO INSTALL
npm install random-string-alphanumeric-module --save

## HOW TO USE
var random = require('random-string-module);

```javascript
## METHOD

# randomAlphanumeric
This method generates a random string of given length.
param length Length of random string to be generated.
param lettersIncluded optional field which can be one of following:
all (default): Includes uppercase letters lowercase letters and numbers
lowercase: Includes lowercase letters and numbers
uppercase: Includes uppercase letters and numbers


console.log(random.randomAlphanumericByLength(10))
//Return b2pdk4bv98