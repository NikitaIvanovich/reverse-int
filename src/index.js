module.exports = function reverse (n) {
     // converting number to string
  let str = n.toString().split("");
 
  // reversing the string
  str.reverse();
   
 
  // converting string to integer
  n = parseInt(str.join(""))
 
  // returning integer
  return n;
}
