// Create a cusotm sort on array to return second smallest value

Array.prototype.customSort = function() {
  this.sort();
  if(this.length<2){
    return null
  }
  return this[1]
};
let input = [5, 2, 8, 1, 9, 4];
console.log(input.customSort()); // Output: 2

