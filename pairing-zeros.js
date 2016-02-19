function pairZeros(arr) {

  let pairing = false;
  return arr.reduce((result,cur,index) => {
    if (cur !== 0) {
      result.push(cur);
    } else {
      if (pairing) { result.push(cur); }
      pairing = !pairing;
    }
    return result;
  },[]);
}