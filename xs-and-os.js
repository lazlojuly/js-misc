// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
function XO (string) {
  var os = string.match(/o/gi);
  var xs = string.match(/x/gi);
  if ((os || xs) && !(os && xs))
  {
    return false;
  } else {
    return !os && !xs || os.length === xs.length;
  }
}

// Best practice
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
