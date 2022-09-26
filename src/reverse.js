function reverseString(string) {
    let arr = string.split('');
    let reversedArray = arr.reverse()
    let result = ""
    for (let i = 0; i < reversedArray.length; i++) {
        result += reversedArray[i]
    }
    return result
}
module.exports = reverseString;