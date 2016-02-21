var makeAcronym = function(string) {

  if (typeof string !== 'string') {
    return 'Not a string';
  }

  if (string.match(/[^a-zA-Z\s:]/)) {
    return 'Not letters';
  }

  return string.split(' ').reduce((acronym,word) => {
    return acronym+=word.charAt(0).toUpperCase();
  },'');

};