function Person(first, last, age, gender) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

var personObj = new Person('Kumud', 'Kumari', 26, 'Female');
personObj.greeting();

function Teacher(first, last, age, gender, subject) {
  this.subject = subject;
  Person.call(this, first, last, age, gender);
}

// subjectFn is not accessible by teacherObj as it is defined before prototype assignment
Teacher.prototype.subjectFn = function() {
  console.log('Pre I teach ' + this.subject);
}

// We need to redefine Teacher.prototype else teacherObj.greeting wont be accessible
Teacher.prototype = new Person();

Teacher.prototype.subjectFn1 = function() {
  console.log('Post: I teach ' + this.subject);
}

Object.defineProperty(Teacher.prototype, 'constructor', { 
  value: Teacher, 
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

const teacherObj = new Teacher('Atul', 'Anand', 29, 'Male', 'Physics');
teacherObj.greeting();
teacherObj.subjectFn1();
teacherObj.subjectFn();
