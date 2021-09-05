// https://www.codewars.com/kata/525d50d2037b7acd6e000534
Object.assign(Array.prototype, {
  square() {
    return this.map(elem => Math.pow(elem, 2));
  },
  cube() {
    return this.map(elem => Math.pow(elem, 3));
  },
  sum() {
    return this.reduce((a,b) => a+b);
  },
  average() {
    if(!this.length) {
      return NaN;
    }
    return this.sum() / this.length;
  },
  even() {
    return this.filter(elem => elem % 2 === 0);
  },
  odd() {
    return this.filter(elem => elem % 2);
  }
});
