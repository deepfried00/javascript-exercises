const palindromes = function (string) {
    const given = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}\s~]/g, "").toLowerCase();
    console.log(given);
    const reverse = given.split("").reverse().join("");
    console.log(reverse);
    if (given === reverse) {
        return true;
    }
    return false;
};
console.log(palindromes('r3ace3car'));


// Do not edit below this line
module.exports = palindromes;
