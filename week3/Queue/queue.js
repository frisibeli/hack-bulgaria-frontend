var queue = (function(){
    var arr = [];
    return {
        push: function(element){
            arr.push(element);
        },
        pop: function(){
            return arr.shift();
        },
        isEmty: function(){
            return arr.length == 0;
        }
    }
})();

var Queue = function(){
    var arr = [];
    return {
        push: function(element){
            arr.push(element);
        },
        pop: function(){
            return arr.shift();
        },
        isEmty: function(){
            return arr.length == 0;
        }
    }
};
var q1 = new Queue();
q1.push(1);
console.log(q1.pop());