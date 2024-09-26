var num1 = 0;
var num2 = 1;
var num3 = 5;
console.log(num1); // 0
console.log(num2); // 1
for(let i = 0; i < num3; i++){
    var num4 = num1 + num2;
    console.log(num4);
    num1 = num2;
    num2 = num4;
}