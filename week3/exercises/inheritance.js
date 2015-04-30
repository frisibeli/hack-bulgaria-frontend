function Person(name){
    this.name = name
}
Person.prototype.toString = function() {
    return "Hello, "+this.name;
};
function Stundent(name, fn){
    Person.call(this, name);
    this.fn = fn;
    return this;
}
Stundent.prototype = Object.create(Person.prototype);
var p = new Stundent("krisko", 542235);
console.log(p.toString())