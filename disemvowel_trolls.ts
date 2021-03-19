export class Kata {
  static disemvowel(str: string) {
    return str.replace(/[a|e|i|o|u]/gi, '');
  }
}
