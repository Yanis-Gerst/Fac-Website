const lowerCaseTheFirstLetter = (string: string) => {
  return string[0].toLowerCase() + string.substring(1);
};

const removeFirstCharacterOf = (string: string) => {
  return string.substring(1);
};

const upperCaseTheFirstLetter = (string: string) => {
  return string[0].toUpperCase() + string.substring(1);
};

const capitilize = (string: string) => {
  return string
    .split(" ")
    .map((word) => upperCaseTheFirstLetter(word))
    .join(" ");
};

export {
  lowerCaseTheFirstLetter,
  removeFirstCharacterOf,
  upperCaseTheFirstLetter,
  capitilize,
};
