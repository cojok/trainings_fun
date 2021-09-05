// https://www.codewars.com/kata/5700c9acc1555755be00027e
function containAllRots(strng, arr) {
  if(strng === '') {
    return true;
  }
  const rotations = [];
  let len = strng.length - 1;
  for(let i = 0; i < len + 1; i++) {
    let j = 0;
    let tmp = strng[len];
    while(j < len) {
      tmp += strng[j];
      j++;
    }
    rotations.push(tmp);
    strng = tmp;
  }
  const findAll = rotations.filter(rotation => !arr.includes(rotation));
  return !findAll.length;
}
