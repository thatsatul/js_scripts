// https://medium.com/javascript-in-plain-english/proto-vs-prototype-in-js-140b9b9c8cd5

const obj1 = {
  a: 1
};
console.log('**** obj1.prototype ****', obj1.prototype);
console.log('**** obj1.__proto__ ****', obj1.__proto__);

function fun() {
  this.b = 1;
}

var funInst = new fun();
console.log('**** fun.prototype ****', fun.prototype);
console.log('**** fun.__proto__ ****', fun.__proto__);
console.log('**** funInst.prototype ****', funInst.prototype);
console.log('**** funInst.__proto__ ****', funInst.__proto__);

// Understanding [[Prototype]]
var proto = {
  describe: function () {
    return 'name: '+ this.name;
  }
};
var obj = {
  __proto__: proto,
  name: 'obj'
};
obj.describe // [Function]
obj.describe() // 'name: obj'
