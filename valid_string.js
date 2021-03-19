var validWord = function(dictionary, word) {
   var regex = new RegExp('^(' + dictionary.join('|') +')+$');
  return regex.test(word)
};
