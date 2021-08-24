function sym(...args) {
  return args.reduce((a, b) => {
    return [... new Set(a.filter(elem => !b.includes(elem))
      .concat(b.filter(elem => !a.includes(elem))))]
  });
}
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [ 1, 4, 5 ]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // [ 3, 5, 4 ]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // [ 7, 4, 6, 2, 3 ]
