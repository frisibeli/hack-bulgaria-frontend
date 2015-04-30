var Element = function(element, content){
    this.openTag = ["<",element,">"].join("");
    this.content = content || ""
    this.closeTag = ["</", element, ">"].join("");
}
Element.prototype.getHTML = function() {
    return [this.openTag, this.content, this.closeTag].join("");
};
Element.prototype.appendElement = function(element) {
    this.content += '\n\t'+element.getHTML()+'\n';
};
Element.prototype.render = function() {
    console.log(this.getHTML());
};

var Paragraph = function(text){
    return new Element("p", text);
}
var Div = function(text){
    return new Element("div", text);
}
var Td = function(text){
    return new Element("td", text);
}
var Tr = function(text){
    return new Element("tr", text);
}
var Th = function(text){
    return new Element("th", text);
}
var Thead = function(text){
    return new Element("thead", text);
}
var Tbody = function(text){
    return new Element("tbody", text);
}
var Table = function(tableObject){
    this.tableObject = tableObject;
    var header = [];
    var tableBody = [];
    var html = "";
    if(typeof tableObject == "object"){
        header = Object.keys(tableObject);
        header.forEach(function(el){
           tableBody.push(tableObject[el])
        })
    }
    html = this.genarate(header, tableBody)
    //return new Element("table", text);
}
Table.prototype.genarate = function(header, body) {
    var html = "";
    var thead = new Thead("");
    var tbody = new Tbody("");
    header.forEach(function(el){
       thead.appendElement(new Th(el));
    })
    body.forEach(function(el){
       var row = new Tr("");
       tbody.appendElement(row); 
    })
    console.log(thead.render());
    console.log(tbody.render());
};
var tableData = {
  "name": ["Ivo", "Rado", "Maria"],
  "age": [22, 24, 22]
}
console.log(new Table(tableData));