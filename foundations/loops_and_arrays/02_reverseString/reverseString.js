const reverseString = function(str) {
    arr = str.split('')
    newarr = []
    for (let i = arr.length; i >= 0; i--) {
        newarr.push(arr[i])
    }
    return newarr.join('')
};

// Do not edit below this line
module.exports = reverseString;
