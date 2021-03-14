function solution(str, ending){
  if(!str.length) {
    return false;
  }
  
  let index = str.length - ending.length;
  if(str.substring(index) === ending) {
    return true
  } else {
    return false;
  }
  
}
