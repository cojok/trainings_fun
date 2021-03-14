export function solution(number: number): string {
  const mappening: object = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I:1,
  };
  if(!number) {
    return '';
  }
  let finalData: string = '';
  const keys = Object.keys(mappening);
  for(const key of keys) {
    while (number >= mappening[key]) {
      finalData += key;
      number = number - mappening[key];
    }
  }
  return finalData;
}
