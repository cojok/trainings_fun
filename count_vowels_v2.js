function getCount(str) {
  const regex = /['a|e|i|o|u']/gm;
  const vowelsCount = str.match(regex);
  return vowelsCount ? vowelsCount.length : 0;
}
