function Person(firstName, lastName, age){
    if(!(this instanceof Person)){ // If Person is not instance of "this" (the mother object of Node/Browser)
        return new Person(firstName, lastName, age)
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getFullNam = function(){
    return [this.firstName, this.lastName].join(" ");
}

var person1 = new Person("Kristiyan", "Krumov", 19);