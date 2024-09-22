{
  const repeatString = (name: string, repeat: number): string => {
    let result = "";

    for (let i = 0; i < repeat; i++) {
      result += name;
    }
    return result;
  };
  const solution1 = repeatString("Abir", 7);
  console.log(solution1);
}
