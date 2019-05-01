function countLetters(inputString) {
  var counter = {};
  for (i = 0; i < inputString.length; i++) {
    if(!counter[inputString[i]]) {
      counter[inputString[i]] = 1;
    } else {
      counter[inputString[i]] = counter[inputString[i]] +1;
    }
  }
  return counter;
}
console.log(countLetters("Mississippi"));