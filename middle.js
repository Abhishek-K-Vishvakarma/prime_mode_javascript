var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  var total = parseInt(sum / arr[i]);
}
console.log(total);
