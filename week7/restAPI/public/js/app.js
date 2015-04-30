var baseURL = "http://localhost/"
var REST = (function(){
    var getStudents = function(){
        $.get("/api/students",function(data){
            console.log(data);
        });
    }
    var newStudent = function(student){
        $.ajax({
            url: "/api/students",
            data: student,
            success: function(data){
                console.log(data);
            },
            method: "POST"
        });
    }
    var getStudent = function(id){
        $.get("/api/student/"+id,function(data){
            console.log(data);
        });
    }
    var updateStudent = function(id, student){
        $.ajax({
            url: "/api/student/"+id,
            data: student,
            success: function(data){
                console.log(data);
            },
            method: "PUT"
        });
    }
    var deleteStudent = function(id){
        $.ajax({
            url: "/api/student/"+id,
            success: function(data){
                console.log(data);
            },
            method: "DELETE"
        });
    }
    return {
        getStudents:getStudents,
        getStudent:getStudent,
        newStudent: newStudent,
        deleteStudent: deleteStudent,
        updateStudent: updateStudent
    }
})();
REST.getStudent(2);
REST.newStudent({name:"New Student", email:"dsfsd@ddfsd.cdo"});
REST.deleteStudent(3);
REST.updateStudent(1, {name:"Peter Georgiev", email:"sdfsd@fsdf.vf"});
REST.getStudents();