//Declare Constants here

//COLORS
export const WEB_COLORS = {
  primary: "#ffde57",
  secondary: "#4584b6",
  pale: "#EDFFE8",
  fade: "#888",
};

//REGEXES
//Name regex for only spaces and alphabets
export const NAME_REGEX = (value) => {
  const regex = /^[a-zA-Z\b]+$/;
  return value === "" || regex.test(value);
};
