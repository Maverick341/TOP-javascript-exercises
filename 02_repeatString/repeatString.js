const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let word = "";
    for (let i = 0; i < num; i++){
        word += str;
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
