// find the number of occurrences of minium value in the list

const findMinNumber = (arr) => {
  let minNumber = Math.min(...arr);
  let numberOfOccurrences = arr.filter((el) => el === minNumber);
  console.log("minNumber", minNumber);
  console.log("Number of occurrences", numberOfOccurrences.length);
};
