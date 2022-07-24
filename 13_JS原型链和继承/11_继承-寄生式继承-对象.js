/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 17:17:25
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 17:22:36
 * @LastEditContent: 
 */
var personObj = {
  ruuning: function() {
    console.log('running')
  }
}

function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log('studying')
  }
  return stu
}

var stuObj1 = createStudent('zzt')
var stuObj2 = createStudent('Lingard')
var stuObj3 = createStudent('Ronaldo')