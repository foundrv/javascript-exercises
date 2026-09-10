const repeatString = function(str, num) {
    newstr = ''
    if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++) {
        newstr += str
    }
    return newstr
};

// Do not edit below this line
module.exports = repeatString;
