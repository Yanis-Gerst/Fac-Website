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

export const camelCase = (string: string) => {
  string.trim();
  const word = string.split(" ");
  for (let i = 1; i < word.length; i++) {
    word[i] = upperCaseTheFirstLetter(word[i]);
  }
  return word.join("");
};

const removeAccentFrom = (string: string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export {
  lowerCaseTheFirstLetter,
  removeFirstCharacterOf,
  upperCaseTheFirstLetter,
  capitilize,
  removeAccentFrom,
};
