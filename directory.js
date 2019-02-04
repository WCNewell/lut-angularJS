angular.module('directoryApp', [])
    .controller('directoryController', function() {

        var dirList = this
        dirList.list = [
            {name: 'Clark', age: 46},
            {name: 'Bobbicat', age: 13},
            {name: 'Ashlee', age: 37},
            {name: 'Sophie', age: 4}
        ]

        dirList.addPerson = function() {
            dirList.list.push({name:dirList.name, age: dirList.age})
            dirList.name = ''
            dirList.age = 0
        }
    })