var num = 56437;
var numArr = num.toString().split('');
var newNum = num;
var numLen = numArr.length;

console.log('****** Original Number *******', num);
for (i = 1; i < numLen; i++ ) {
  var first = parseInt(numArr[0]);
  newNum = newNum * 10;
  newNum = newNum + first;
  newNum = newNum - (first * Math.pow(10, numLen));
  console.log('***** Number after rotation ********', i, newNum);
  numArr = newNum.toString().split('');
}
