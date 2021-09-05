// https://www.codewars.com/kata/5432fd1c913a65b28f000342
function multiplicationTable(row,col){
  const results = [];
  for(let i = 1; i <= row; i++) {
    let tmp = [];
    for(let j = 1; j <= col; j++) {
      if(i !== 1) {
        tmp.push(results[0][j - 1] * i)
      } else {
        tmp.push(j); 
      }
    }
    results.push(tmp);
  }
  return results;
}
