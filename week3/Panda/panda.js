"use strict"
function Panda(name, sex){
    if(["male", "female"].indexOf(sex) === -1){
        sex = female
    }
    this.name = name;
    this.sex = sex;
    this.weight = 20;
}
Panda.prototype.toString = function() {
    return this.name+" is a "+this.sex+" panda that weighs "+ this.weight+" kg";
};
Panda.prototype.isMale = function() {
    return this.sex === "male";
};
Panda.prototype.isFemale = function() {
    return this.sex === "female";
};
Panda.prototype.eat = function(food) {
    this.weight += food/2;
    var isLazy = this.weight >= 80;
    if(this.weight >= 80 && !isLazy){
        this.name += "Lazy";
    }
};
Panda.prototype.mate = function(otherPanda) {
    var chance = Math.floor((Math.random() * 2) + 1),
        sex = "", name = "", mother = {}, father = {};
    if((this.isMale() && otherPanda.isMale() ||
        this.isFemale() && otherPanda.isFemale())){
        console.error("Error")
    }else{
        if(this.isMale()){
            father = this;
            mother = otherPanda;
        }else{
            mother = this;
            father = otherPanda;
        }
        if (chance == 1) {
            sex = "male";
            name = [father.name, mother.name].join(" ");
        }else{
            sex = "female";
            name = [mother.name, father.name].join(" ");
        }
        return new Panda(name, sex);
    }
    
};

//exports.Panda = Panda;