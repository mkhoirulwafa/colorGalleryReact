export const getRandomInt = (maxInt: number, minInt: number) => {
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  }