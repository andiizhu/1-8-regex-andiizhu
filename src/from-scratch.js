const helloWorldRegex = (str) => /Hello world/im.test(str);
// checking for the string hello world is matched within any of the given strings
// i, m = the letter i in regex lets us dismiss the case sensitivity, m allows us to check for a pattern from start to end in string.

const hasAVowel = (str) => /[aeiou]/gi.test(str);

const hasCatsOrDogs = (str) => /\b(cats|dogs)\b/i.test(str);

const hasVowelStart = (str) => /^[aeiou]/gi.test(str);

const hasPunctuationEnd = (str) => /[!.?]$/.test(str);
// [ ] = in regards to regex this bracket allows for us to check for those specific puncuations within the string.
// $ = in regex specifies that we want to check for the puncuation at the end of the string only

const hasNothingOrDigits = (str) => /^(\d*|\s*)$/g.test(str);

const hasNoFlippers = (str) => !/[clikoxBCDEHIKOX]/.test(str)
// [] = allows for us to check for all of these letters upper/lowercase are within the string
// ! = checks if none of these are NOT in the string it would return true this allows for the boolean value to be flipped


const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

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
