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

const hasNoFlippers = (str) => !/[clikoxBCDEHIKOX]/.test(str);
// [] = allows for us to check for all of these letters upper/lowercase are within the string
// ! = checks if none of these are NOT in the string it would return true this allows for the boolean value to be flipped

const isValidEmail = (str) => /^[a-zA-z0-9_.]+@[a-z]+\.[a-z]{2,3}$/.test(str);
/*
/: This marks the beginning of the regular expression.
^: This asserts the start of the string.
[a-zA-Z0-9_.]+: This part matches the local part of the email address before the "@" symbol:
    [a-zA-Z0-9_.]: Matches any uppercase or lowercase letter, digit, underscore, or dot.
    +: Quantifier that matches one or more occurrences of the preceding pattern.
@: This matches the "@" symbol.
[a-z]+: This matches the domain name (excluding the top-level domain):
    [a-z]: Matches any lowercase letter.
    +: Quantifier that matches one or more occurrences of the preceding pattern.
\.: This matches the dot (".") before the top-level domain.
[a-z]{2,3}: This matches the top-level domain:
    [a-z]: Matches any lowercase letter.
    {2,3}: Quantifier that matches between 2 and 3 occurrences of the preceding pattern. This allows for top-level domains like "com", "org", "net", etc.
$: This asserts the end of the string.
*/

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
