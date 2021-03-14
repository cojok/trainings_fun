function getCount(str) {
  let vowelsCount = 0;
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  for(let letter of str) {
    if(vowelsArray.indexOf(letter) !== -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
