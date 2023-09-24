//Create a new folder called 'model'
// and inside it, a students.js file. This is where we will implement our CRUD operations.

let students = [];
addStudent = function (student) {
    const student = {
        id: students.length + 1, 
        fname: student.fname,
        mname: student.mname,
        lname: student.lname,
        address: student.address,
        // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    students.push(student);
    return student;
};

upDateStudent = function (student) {

    const updateStudent = students[id]
    {
        updateStudent.fname = student.fname;
        updateStudent.mname = student.mname;
        updateStudent.lname = student.lname;
        updateStudent.address = student.address;
         // add rest of the properties of the student by looking at the student info in the index.ejs file
    };
    return student;
};

// prints the students array
const getStudents = function () {
    students.forEach(student => {
        console.log(student);
    });
}
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;




