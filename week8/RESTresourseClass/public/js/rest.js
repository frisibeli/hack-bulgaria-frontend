var Resource = function(url){
    this.url = url;
};

Resource.prototype.getStudents = function() {
    return Q($.get(this.url));
};

Resource.prototype.newStudent = function(student) {
    return Q($.ajax({
        url: this.url,
        data: student,
        method: "POST"
    }));
};
Resource.prototype.getStudent = function(id){
    return Q($.get("/api/student/"+id));
}
Resource.prototype.updateStudent = function(id, student){
    return Q($.ajax({
        url: "/api/student/"+id,
        data: student,
        method: "PUT"
    }));
}
Resource.prototype.deleteStudent = function(id){
    return Q($.ajax({
        url: "/api/student/"+id,
        method: "DELETE"
    }));
}
var student = new Resource();

student.getStudent(2).then(function(res){
    console.log(res);
    return Q(res);
}).then(function(res){
    return student.newStudent({name:res.name+"1", email:res.email+"1"})
}).then(function(res){
    console.log(res);
});
/*student.newStudent({name:"New Student", email:"dsfsd@ddfsd.cdo"}).then(function(res){
    console.log(res);
});
student.deleteStudent(3).then(function(res){
    console.log(res);
});
student.updateStudent(1, {name:"Peter Georgiev", email:"sdfsd@fsdf.vf"}).then(function(res){
    console.log(res);
});
student.getStudents().then(function(res){
    console.log(res);
});*/