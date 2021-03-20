export const createArray = (width) => {
  let tempArr = [];
  for (let i = 0; i < +width; i++) {
    tempArr.push([]);
  }
  for (let i = 0; i < +width; i++) {
    for (let j = 0; j < +width; j++) {
      tempArr[i].push(`${j}`);
    }
  }
  return tempArr;
};

export const randomBoolean = (width = 3) => {
  let a = Math.floor(Math.random() * Math.floor(width));
  return `${Math.floor(Math.random() * width) + 1}${
    Math.floor(Math.random() * width) + 1
  }`;
};
