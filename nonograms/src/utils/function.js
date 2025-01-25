function maxLength(arrNum) {
  const objLength = {
    horizontal: 0,
    vertical: 0,
  };
  const horizontalLenght = (arrNum) => {
    let maxLength = 0;
    for (let i = 0; i < arrNum.length; i += 1) {
      let result = [];
      let count = 0;
      for (let j = 0; j < arrNum[i].length; j += 1) {
        if (arrNum[i][j] === 1) {
          count += 1;
        } else {
          if (count > 0) {
            result.push(count);
          }
          count = 0;
        }
      }
      if (count > 0) {
        result.push(count);
      }
      if (result.length > maxLength) {
        maxLength = result.length;
      }
    }
    return maxLength;
  };
  const verticalLenght = (arrNum) => {
    let maxLength = 0;
    for (let i = 0; i < arrNum[0].length; i += 1) {
      let result = [];
      let count = 0;
      for (let j = 0; j < arrNum.length; j += 1) {
        if (arrNum[j][i] === 1) {
          count += 1;
        } else {
          if (count > 0) {
            result.push(count);
          }
          count = 0;
        }
      }
      if (count > 0) {
        result.push(count);
      }
      if (result.length > maxLength) {
        maxLength = result.length;
      }
    }
    return maxLength;
  };
  objLength.horizontal = horizontalLenght(arrNum);
  objLength.vertical = verticalLenght(arrNum);
  return objLength;
}

export { maxLength };
