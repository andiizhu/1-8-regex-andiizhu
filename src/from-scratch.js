const helloWorldRegex = (str) => /Hello world/im.test(str);
// checking for the string hello world is matched within any of the given strings
// i, m = the letter i in regex lets us dismiss the case sensitivity, m allows us to check for a pattern from start to end in string.

const hasAVowel = (str) => /[aeiou]/gi.test(str);

const hasCatsOrDogs = (str) => {};

const hasVowelStart = (str) => {};

const hasPunctuationEnd = (str) => {};

const hasNothingOrDigits = (str) => {};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
