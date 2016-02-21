"use strict";

function pascalsTriangle(n) {

  let triangle = [[1]];

  for (var x=1; triangle.length<n; x++) {
    let prevLevel = triangle[x-1];
    let nextLevel = [];
    for (var i=0; i<prevLevel.length; i++) {
      nextLevel.push((prevLevel[i-1]||0) + (prevLevel[i]||0));
    }
    triangle.push(nextLevel);
  }

  // return triangle.reduce((flat,level)=>{
  //   return flat.concat(level);
  // },[]);

  return triangle;

}

console.log(pascalsTriangle(3));
