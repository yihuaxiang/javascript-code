/* Extend function. */

function extend(subClass, superClass) {
  // var F = function() {};
  // F.prototype = superClass.prototype;
  // subClass.prototype = new F();
  // subClass.prototype.constructor = subClass;
  subClass.prototype=superClass.prototype;
  subClass.constructor=subClass;
}


/* Class Person. */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

/* Class Author. */

function Author(name, books) {
  Person.call(this, name);//Author继承了Person的属性 相当于执行了this.name=name
  this.books = books;
}
extend(Author, Person);

Author.prototype.getBooks = function() {
  return this.books;
};


var fdd=new Author("fdd","javascript");
console.log(fdd.getName());
console.log(fdd.getBooks());


