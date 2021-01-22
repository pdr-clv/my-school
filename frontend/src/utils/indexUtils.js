export const formatTime = (time) => {
  if (time < 10) return `0${time} s`;
  if (time < 60) return `${time} s`;
  const minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes} m ${seconds} s`;
};

export const getArrayLength = (arraylength) => {
  let arrayNumItems = [];
  for (let i = 0; i < arraylength; i++) {
    arrayNumItems.push(i);
  }
  return arrayNumItems;
};
