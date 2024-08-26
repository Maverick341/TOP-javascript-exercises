const reverseString = function(string) {
    let arr = string.split("");
    arr.reverse();
    string = arr.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
