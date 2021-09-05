// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
  word = word.toLowerCase();
  const wordArr = word.split('');
  let results = [];
  const tmp = [];
  for(const i in wordArr) {
    if(tmp.includes(wordArr[i])) {
      results[tmp.indexOf(wordArr[i])] = ')';
      results.push(')');
    } else {
      tmp.push(wordArr[i]);
      results.push('(');
    }
  }
  return results.join('');
}
