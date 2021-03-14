function solution(str, ending){
  return str.length && typeof str === 'string' && ending === str.substring(str.length-ending.length);
}
