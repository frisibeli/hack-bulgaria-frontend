var express = require("express"),
    app = express(),
    fs = require("fs"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var users = [
  {id:0, name:"Kristiyan Krumov", email:"emailche@gmail.com"},
  {id:1, name:"Yoana Georgieva", email:"joncig@gmail.com"},
  {id:2, name:"Ivan Ivanov", email:"vankata@gmail.com"},
],currentId = 2;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.set("views", "./views");
app.set('view engine', 'jade');

app.use(express.static("public"));

app.get("/api/students", function(req, res, next){
  res.jsonp(users);
});
app.get("/api/student/:id", function(req, res, next){
  if(req.params && req.params.id){
    if(typeof(users[req.params.id]) != "undefined"){
      res.jsonp(users[req.params.id]);
    }else{
      res.jsonp({error:1});
    }
  }else{
    res.jsonp({error:1});
  }
});

app.put("/api/student/:id", function(req, res, next){
  // get the id from the params
  var id = req.params.id;
  // update the info from the body if passed or use the existing one
  users[id].name = req.body.name || users[id].name;
  users[id].email = req.body.email || users[id].email;

  res.jsonp({
    msg: 'user data updated',
    data: users[id]
  });
});

app.post('/api/students', function(req, res){
  // req.body contains the incoming fields and values
  currentId++;
  var id = currentId;
  var name = req.body.name;
  var email = req.body.email;

  users.push({
    id: currentId,
    name: name,
    email: email
  });
  res.jsonp({
    msg: 'student created',
    data: users[id]
  });
});

app.delete('/api/student/:id', function(req, res){
  var id = req.params.id;
  if(users[id]){
    users.splice(id,1)
    res.jsonp('user '+id+' successfully deleted!');
  } else {
    res.jsonp('user '+id+' does not exist!');
  }
});

app.get("/", function(req, res, next){
	if (fs.existsSync(__dirname+"/views/index.jade")) {
		res.render("index");
	}else {
    next();
  };
});

app.get("/:fileName", function(req, res, next){
	if(req.params && req.params.fileName && req.params.fileName != "product" && fs.existsSync(__dirname+"/views/"+req.params.fileName+".jade")){
		res.render(req.params.fileName);
	} else {
		next();
	}
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})