var count = 0;

function permute(str, prefix) {
  if(str.length == 1){
    console.log(prefix + str);
    count++;
    return;
  }
  for(let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    let suffix = str.substr(0, i) + str.substr(i+1);
    console.log(prefix + ch, suffix);
    permute(suffix, prefix + ch);
  }
}

var word = 'ABC';
permute(word, '');
console.log(count);
