// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    return word.toLowerCase().split('').map((elem, index, array) => {
      return array.indexOf(elem) === array.lastIndexOf(elem) ? '(' : ')'
    }).join('');
}
