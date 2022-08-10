// Create a es6 module with function getName , getSurname and default export getFullname

export const getName = () => {
  return "Asad";
};

export const getSurName = () => {
  return "Aziz";
};

const getFullName = () => {
  return "Asad Aziz";
};

export default getFullName;
