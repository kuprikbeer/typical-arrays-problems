
exports.min = function min(array) {
  if (Array.isArray(array) && array.length > 0) {
    let sort1 = array.sort((a, b) => a - b)
    console.log(sort1[0], sort1)
    return sort1[0]
  }
  else {
    console.log(0)
    return 0;
  }

}

exports.max = function max(array) {
  if (Array.isArray(array) && array.length > 0) {
    let sort2 = array.sort((a, b) => b - a)
    console.log(sort2[0], sort2)
    return sort2[0]
  }
  else {
    console.log(0)
    return 0;
  }
}

exports.avg = function avg(array) {
  if (Array.isArray(array) && array.length > 0) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    console.log(sum / array.length)
    return sum / array.length
  }
  else {
    console.log(0)
    return 0;
  }
}
