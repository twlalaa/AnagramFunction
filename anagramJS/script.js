// "use strict";

const anagram = (str1, str2) => {
  let first = str1.toLowerCase().split("").sort().join("");
  let second = str2.toLowerCase().split("").sort().join("");
  console.log(first === second);
};

anagram("silent", "listen");
