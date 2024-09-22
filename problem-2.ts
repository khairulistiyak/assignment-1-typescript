{
  const findLargestNumber = (largestNumber: number[]): number => {
    const big = Math.max(...largestNumber);
    return big;
  };
  const solution2 = findLargestNumber([120, 50, 30, 30, 130]);
  console.log(solution2);
}
