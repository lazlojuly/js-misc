function pairZeros(arr) {
  let pairing = false;
  return arr.reduce((result,cur,index) => {
    if (cur !== 0) {
      result.push(cur);
    } else {
      if (pairing) {
        pairing = false;
      } else {
        pairing = true;
        result.push(cur);
      }
    }
    return result;
  },[]);
}

// clever
function pairZeros(a, f) {
  return a.filter(function(n) { return (n != 0 || (f = !f)); });
}