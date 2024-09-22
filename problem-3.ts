const filterEvenNumbers = (evenNumbers: number[]): number[] => {
  const result = evenNumbers.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return result;
};
const solution3 = filterEvenNumbers([120, 33, 13, 41, 80, 50, 51]);
console.log(solution3);
