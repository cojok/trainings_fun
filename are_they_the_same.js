// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
function comp(array1, array2){
  if(!array1 || !array2) {
    return false;
  }
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array2.filter((elem, index) => {
    return elem === array1[index] * array1[index];
  }).length === array2.length;
}
