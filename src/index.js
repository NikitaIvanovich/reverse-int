module.exports = function reverse (n) {
  let str = n.toString().split("");
  str.reverse();   
  n = parseInt(str.join(""));
 
  return n;
}
