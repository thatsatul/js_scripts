var obj1 = {
  a: 1,
};

var obj2 = Object.create(obj1);
console.log('****** var obj2 = Object.create(obj1); obj2, obj1, obj2.a', obj2, obj1, obj2.a);
console.log('****** obj2.prototype ********', obj2.__proto__);

var obj3 = Object.create(obj2);
console.log('****** var obj3 = Object.create(obj2); obj3, obj2, obj3.a', obj3, obj2, obj3.a);
console.log('****** obj2.prototype, obj3.prototype ********', obj2.__proto__, obj3.__proto__);

console.log('******* Array.proto ********', Array.__proto__);
console.log('******* Array.proto ********', Object.__proto__);
console.log('******* String.proto ********', String.__proto__);
console.log('******* Array instanceof Object ********', Array instanceof Object);
console.log('******* Object instanceof Object ********', Object instanceof Object);
console.log('******* String instanceof Object ********', String instanceof Object);

// Use case of prototype
if(!String.prototype.rep) {
  String.prototype.rep = function() {
    console.log('**** this inside String.prototype.rep ****', this);
    try {
      return this + 'REP' + this;
    } catch (e) {
      return 'error';
    }
  };
}

var color1 = new String("green");
console.log('******* x instanceof String *****', color1 instanceof String);
console.log('******* x.length, x.repeat *****', color1.length, color1.rep());

// Prototype usage in case of instance
function Test( key ) {
  this.key = key;
}

Test.prototype.fn = function () {
  return 'pqr';
}

// prototype only works with function  and not __proto__
// Test.__proto__.fnO = function () {
//   return 'mnp';
// }

var ins = new Test('aaa');
console.log('******* ins.key, ins.fn() ******', ins.key, ins.fn());
