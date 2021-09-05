function permAlone(str) {
  let swap = function(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};
const result = [];
const output = (input) => {
  if(!input.join('').match(/(\w)\1+/g)) {
    result.push(input.join(''));
  }
}
let permutationHeap = function(array, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i++) {
      permutationHeap(array, n - 1);
      if (n % 2) {
        swap(array, 0, n - 1); // when length is odd so n % 2 is 1,  select the first number, then the second number, then the third number. . . to be swapped with the last number
      } else {
        swap(array, i - 1, n - 1); // when length is even so n % 2 is 0,  always select the first number with the last number
      }
    }
  }
};
  permutationHeap(str.split(''));
  return result.length;
}
console.log(permAlone("aab"));
console.log(permAlone("aaa"));
