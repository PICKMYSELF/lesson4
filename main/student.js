let Person = require('./person');
// Write your code here
function Student(name, age, klass){
  Person.call(this, name, age);
  this.class = klass;
  this.introduce = function() {
    return "My name is " + this.name + ". I am " + this.age + " years old. I am a Student. I am at Class " + this.class + ".";
  }  
}
module.exports = Student;
