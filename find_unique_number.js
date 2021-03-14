function findUniq(arr) {
  let duplicateMapping = {};
  for(const value of arr) {
    if(duplicateMapping[value] != null) {
      duplicateMapping[value] = 'duplicate';
    }else {
      duplicateMapping[value] = value;
    }
  }
  
  for(const i in duplicateMapping) {
    if(duplicateMapping[i] != 'duplicate') {
      return duplicateMapping[i];
    }
  }
}
