/**
 * Created by epro.ma on 2017/10/16.
 */
var teacher = require('./teacher');
var student = require('./student');

function  add(teacherName,students){
    teacher.teacherAdd(teacherName);
    students.forEach(function(item,index){
         index =index+1;
        process.stdout.write('第'+index+'个学生   ');
        //console.log('第'+index+'个学生   ');
        student.studentAdd(item);
    })
}
//add('Populus',['青杨','雪松'])
//module.exports= add;
exports.klassAdd =add ;