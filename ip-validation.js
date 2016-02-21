function isValidIP(str) {
  let regex= new RegExp(/^((0|([1-9]\d{0,2}))\.){3}(0|([1-9]\d{0,2}))$/);
  if (regex.test(str)) {
    return str.split('.').every((v)=>{
      return parseInt(v) <= 255;
    });
  } else {
    return false;
  }
}

