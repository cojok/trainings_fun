// https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
  /*Detailed version
  const numString = num.toString(10);
  const numLen = parseInt(numString.length);
  const numSplitExpanded = numString.split('').map((n, i) => {
    let numTmp = parseInt(n) * Math.pow(10, (numLen - (i + 1)));
    return numTmp;
  }).filter(elem => elem > 0);
  return numSplitExpanded.join(' + ');*/
  return num.toString(10).split('')
    .map((n, i) => parseInt(n) * Math.pow(10, (parseInt(num.toString(10).length) - (i + 1))))
    .filter(elem => elem > 0).join(' + ');
}
