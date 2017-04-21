var lowercase = require('tt-lowercase');
var uppercase = require('tt-uppercase');

var STRING_VALUE = "ZcXoFNVhEPvFrOqdEdwL";
var NUMBER_VALUE = 1163062291;

console.log(`uppercase the value "${STRING_VALUE}":`, uppercase(STRING_VALUE));
console.log(`lowercase the value "${STRING_VALUE}":`, lowercase(STRING_VALUE));

try{
    uppercase(NUMBER_VALUE);
} catch(error) {
    console.log(`uppercase should error on a number value "${NUMBER_VALUE}":`, error.message);
}

try{
    lowercase(NUMBER_VALUE);
} catch(error) {
    console.log(`lowercase should error on a number value "${NUMBER_VALUE}":`, error.message);
}
