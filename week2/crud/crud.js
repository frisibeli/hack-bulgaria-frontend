var prompt = require("prompt"),
    DB = [], 
    DBid = 1,
    jf = require('jsonfile'),
    util = require('util'),
    file = './db.json',


    promptMenuschema = {
      properties: {
        number: {
            pattern: /[1-9]/,
            message: 'Choose option',
            required: true
          }
      }
    },
    promptUpdateSchema = {
      properties: {
        id:{
          pattern:/[0-9]/,
          message: 'numbers only',
          required: true
        },
        name:{
          pattern:/[a-zA-Z0-9]/,
          message: 'letters and numbers only',
          required: true
        },
        email:{
          pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          message: 'Invalid email',
          required: true
        }
      }
    },
    promptIDSchema = {
      properties: {
        id: {
            pattern: /[0-9]/,
            message: 'Choose option',
            required: true
          }
      }
    },
    promptItemSchema = {
      properties:{
        name:{
          pattern:/[a-zA-Z0-9]/,
          message: 'letters and numbers only',
          required: true
        },
        email:{
          pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          message: 'Invalid email',
          required: true
        }
      }
    };
console.reset = function () {
  return process.stdout.write('\033c');
}
function renderMenu(){
  console.log("-----------------------------");
  console.log("MENU");
  console.log("-----------------------------");
  console.log("1. List");
  console.log("2. Add");
  console.log("3. Get");
  console.log("4. Remove");
  console.log("5. Update");
  console.log("5. Update");
  console.log("6. Save DB");
  console.log("7. Load DB");
  console.log("8. Search");
  console.log("9. Quit");
}
function getList(){
  console.reset();
  console.log("----------------------");
  console.log("LIST");
  console.log("----------------------");
  for (var i = 0; i < DB.length; i++) {
    console.log("| "+DB[i].id+" | "+DB[i].name+" | "+DB[i].email+" |");
  }
  console.log("----------------------");
  renderMenu();
  getMenuOption();
}
function getRecordById(id){
  console.reset();
  console.log("----------------------");
  console.log("LIST");
  console.log("----------------------");
  for (var i = 0; i < DB.length; i++) {
    if(DB[i].id == id){
      console.log("| "+DB[i].id+" | "+DB[i].name+" | "+DB[i].email+" |");
    }
  }
  console.log("----------------------");
  renderMenu();
  getMenuOption();
}
function searchFor(keywords){
  var results = [];
  console.reset();
  console.log("----------------------");
  console.log("Result");
  console.log("----------------------");
  keywords = keywords.split(/[.,\/ -]/);
  for (var j = 0; j < keywords.length; j++) {
    var key = keywords[j];
    for (var i = 0; i < DB.length; i++) {
      if(DB[i].id == parseInt(key) || DB[i].name.indexOf(key)>=0 || DB[i].email.indexOf(key)>=0){
        if(results.indexOf(i) < 0){
          console.log("| "+DB[i].id+" | "+DB[i].name+" | "+DB[i].email+" |");
          results.push(i);
        }
      }
    }
  }
  console.log("----------------------");
  renderMenu();
  getMenuOption();
}
function removeRecordById(id){
  console.reset();
  for (var i = 0; i < DB.length; i++) {
    if(DB[i].id == id){
      console.log("DELETED:");
      console.log("| "+DB[i].id+" | "+DB[i].name+" | "+DB[i].email+" |");
      DB.splice(i, 1);
    }
  }
  renderMenu();
  getMenuOption();
}
function updateRecordById(id, nameEdited, emailEdited){
  console.reset();
  for (var i = 0; i < DB.length; i++) {
    if(DB[i].id == id){
      console.log("UPDATED:");
      console.log("| "+DB[i].id+" | "+nameEdited+" | "+emailEdited+" |");
      DB[i] = {id:DB[i].id, name:nameEdited, email:emailEdited};
    }
  }
  renderMenu();
  getMenuOption();
}
function updateById(){
  prompt.start();
  prompt.get(promptUpdateSchema, function (err, result) {
     updateRecordById(parseInt(result.id), result.name, result.email);
  });
}
function removeById(){
  prompt.start();
  prompt.get(promptIDSchema, function (err, result) {
     removeRecordById(parseInt(result.id));
  });
}
function getById(){
  prompt.start();
  prompt.get(promptIDSchema, function (err, result) {
     getRecordById(parseInt(result.id));
  });
}
function addItem(){
  console.reset();
  console.log("Add item to DB.");
  prompt.start();
  prompt.get(promptItemSchema, function (err, result) {
      var record = {id: DBid, name: result.name, email:result.email};
      DBid++;
      DB.push(record);
      console.log("Successfully added to DB.");
      renderMenu();
      getMenuOption();
  });
}
function saveDB(){
  jf.writeFile(file, DB, function(err) { //json file has four space indenting now
      console.log("Saved Successfully!");
      renderMenu();
      getMenuOption();
  });
}
function searchDB(){
  prompt.start();
  prompt.get(["keywords"], function (err, result) {
      searchFor(result.keywords);
  });
}
function loadDB(){
  jf.readFile(file, function(err, obj) {
    console.log(obj, err);
    DB = obj;
    DBid = parseInt(DB[DB.length-1].id)+1;
    renderMenu();
    getMenuOption();
  });
}
function getMenuOption(){
  prompt.start();
  prompt.get(promptMenuschema, function (err, result) {
      switch(result.number){
        case "1": getList(); break;
        case "2": addItem(); break;
        case "3": getById(); break;
        case "4": removeById(); break;
        case "5": updateById(); break;
        case "6": saveDB(); break;
        case "7": loadDB(); break;
        case "8": searchDB(); break;
        case "9": console.log("Good Bye!"); break;
      }
  });
}

renderMenu();
getMenuOption();