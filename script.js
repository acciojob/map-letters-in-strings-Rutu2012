function mapLetters(word) {
  const result = {};
  
  for (let i = 0; i < word.length; i++) {
    const char = Symbol.for(word[i]); // Use global symbol registry
    if (!result[char]) {
      result[char] = [];
    }
    result[char].push(i);
  }

  return result;
}
console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));

