const removeFromArray = function() {
    const args = Array.from(arguments);

    const array = args[0];

    const valuesToRemove = args.slice(1);

    const newArray = [];

    for (let item = 0; item < array.length; item++) {
        if (!valuesToRemove.includes(array[item])) {
            newArray.push(array[item]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
