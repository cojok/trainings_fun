export function solution(str: string, ending: string): boolean {
  if(str.substring(str.length - ending.length) === ending) {
    return true;
  } 
  return false;
}
