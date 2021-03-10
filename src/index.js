
exports.min = function min(array) {
  if (array == [] || array == 0 || array == undefined || array == null) {
    return 0;
  } else {
    let minValue;
    array.sort((a, b) => a - b);
    minValue = array[0];
    return minValue;

  }
};

exports.max = function max(array) {
  if (array == [] || array == 0 || array == undefined || array == null) {
    return 0;
  } else {
    let maxValue;
    array.sort((a, b) => a - b);
    maxValue = array[array.length - 1];
    return maxValue;
  }
};

exports.avg = function avg(array) {
  if (array == [] || array == 0 || array == undefined || array == null) {
    return 0;
  } else {
    let avgValue = 0;
    let summ = 0;
    array.forEach(item => {
      summ += item;
    });
    avgValue = summ / array.length;
    return avgValue;
  }
};

