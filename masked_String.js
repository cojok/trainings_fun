// return masked string
function maskify(cc) {
  if(cc.length <= 4) {
    return cc
  }
  const len = cc.length - 4;
  const lastPart = cc.substring(len);
  const maskedPart = cc.substring(0, len).replace(/\d|\w/g, '#');
  return maskedPart + lastPart;
  
}
