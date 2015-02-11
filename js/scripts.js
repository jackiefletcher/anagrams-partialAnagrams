var anagram = function(word, array) {
  var anagrams = [];

  array.forEach(function(wordToCheck) {
    var potentialAnagram = wordToCheck.toLowerCase().split("").sort().join()
    var originalWord = word.toLowerCase().split("").sort().join()
    if (potentialAnagram === originalWord) {
      anagrams.push(wordToCheck);
    }
  })

  return anagrams;
};

var partialAnagram = function(word, maybeWord) {
  var partialAnagrams = [];
  var letters = maybeWord.split("")
  var answer = true;


  for (var index = 0; index < letters.length; index += 1) {
    var n = word.indexOf(letters[index])
    if (n != -1) {
      word.slice(0,n) + word.slice(n+1);
    } else {
      answer = false;
    }
  }

  if (answer) {
    return true;
  } else {
    return false;
  }


};
