
exports.min = function min (array) {
  if (array){
    let minVal = 0
    for (let i = 0; i < array.length; i++){
      minVal < array[i] ? minVal : minVal=array[i] 
    }
    return minVal
  }
  return 0;
}

exports.max = function max (array) {
  if (array){
    let maxVal = 0
    for (let i = 0; i < array.length; i++){
      maxVal > array[i] ? maxVal : maxVal=array[i] 
      
    }
    return maxVal
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0){
    let avgVal = array.reduce((acc, cur) => acc + cur)
    return avgVal/array.length
  }
  return 0;
}
