//Array(50)
//Array(50).keys() // returns
const findRange = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

console.log(findRange(45, 50));
