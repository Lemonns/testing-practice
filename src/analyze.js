function analyzeArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    const minimum = Math.min(...array);
    const maximum = Math.max(...array);
    const length = array.length

    let object = {
        average: average,
        min: minimum,
        max: maximum,
        length: length
    }

    return object;
}


module.exports = analyzeArray;

