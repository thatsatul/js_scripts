
// 1
// 3 2
// 4 5 6

var a = [];
var n = 17;
function zigzag() {
	var last = 0;
	for (let i = 1; i <= n; i++) {
    a.push(i);
  }
  for(let j = 1; last < n; j++) {
    last = last + j;
    showRow(last, j);
  }
}
function showRow(last, rowSize) {
  // console.log(last, rowSize);
  let row = [];
	if(rowSize % 2 != 0) {
    direction = true;
    num = last - rowSize + 1;
  } else {
    direction = false;
    num = last > n ? n : last;
    rowSize = last > n ? rowSize - (last - n) : rowSize;
  }
	while(rowSize > 0) {
    row.push(num);
    direction ? num++ : num--;
    rowSize--;
  }
  console.log(row.join(','));
}
zigzag();


