{
  const logString = (name: unknown) => {
    if (typeof name === "string") {
      return name;
    } else {
      return "error , Input is not a string";
    }
  };

  const solution7 = logString("Khairul Istiyak");
  // console.log(solution7);
}
