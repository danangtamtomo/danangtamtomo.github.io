var ClassRoom = function(student) {
    if(typeof student !== 'object') {
        return false;
    }
    var students = [];
    this.student = student;
    this.inputStudent = function() {
        students.push(this.student);
    };
    this.getStudents = function() {
        return students;
    };
};
var classRoom = new ClassRoom({nama: 'Danang'});
classRoom.inputStudent();
console.log(classRoom.getStudents());
