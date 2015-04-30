var bus = (function(){
    var events = {};
    return{
         on: function(event, callback){
            if(typeof events[event] == "undefined"){
                events[event] = [];
            }
            events[event].push(callback);
         },
         trigger: function(event){
            if(typeof events[event] == "undefined"){
                console.log("no such element");
            }else{
                events[event].forEach(function(i){
                    i();
                })
            }
            
         },
         remove: function(event){
            delete events[event];
         }
    }
})();

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
});

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});
bus.remove("PANIC_EVENT");
bus.trigger("PANIC_EVENT");