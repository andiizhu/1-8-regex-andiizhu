const swapAllCases = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += str[i].toLowerCase();
    } else result += str[i].toUpperCase();
  }
  return result;
};

// const swapAllCases = (str) => {
//   const changeCase = (match) => { //callback function
//     if (/[a-z]/.stte(match)) return match.toUpperCase(); if regex /a-z/.test(<argument>) is true then uppercase the arguement.
//     if (/[A-Z]/.test(match)) return match.toLowerCase(); if regex /A-Z/.test(<argument) is true then lowercase the argument.
//   };
//   return (str.replaceAll(/[a-zA-Z]/g, changeCase));// .replace replaces the first thing only. .replaceAll replaces everything.
// };
module.exports = {
  swapAllCases,
};
