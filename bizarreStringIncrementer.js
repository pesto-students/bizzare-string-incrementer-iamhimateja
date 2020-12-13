const bizarreStringIncrementer = string => {
  if (isNaN(Number(string[string.length - 1]))) return `${string}1`
  const stringArray = string.split('')
  // Duplicated string array
  let stringArrayDup = stringArray.slice()
  // store the numbers we got in reverse order
  let numberArray = [];
  // loop through the array in reverse order so that we can get the number we need to add.
  for (let i = stringArray.length - 1; i >= 0; i--) {
    // if the last charecter of the input is not a number we break the loop
    if (isNaN(Number(stringArray[i]))) {
      break;
    } else {
      // remove the last element of the string at the same time push the integer we got as the first element of the array
      stringArrayDup.pop();
      numberArray.unshift(stringArray[i])
    }
  }
  if (numberArray.length == 0) {
    return `${string}1`;
  } else {
    const remainingString = stringArrayDup.join(""),
      // join the number array we got and convert it 
      number = Number(numberArray.join("")),
      // Add 1 to the number and pad the leading zeroes
      paddedNumber = String(number + 1)
      .padStart(numberArray.length, 0);
    return `${remainingString}${paddedNumber}`;
  }
}