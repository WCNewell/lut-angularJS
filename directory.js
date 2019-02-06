angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/')

        $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Hello</h1>'
        })
        .state('about', {
            url: '/about',
            template: '<h1>About</h1>'
        })
    })
    .controller('directoryController', function() {

        var dirList = this

        dirList.toggle=false

        dirList.list = [
            {name: 'Clark', age: 46, img: './images/Woofy.jpg'},
            {name: 'Bobbicat', age: 13, img: './images/Meowy.jpeg'},
            {name: 'Ashlee', age: 37, img: './images/Poody.jpg'},
            {name: 'Sophie', age: 4, img: './images/Barky.jpeg'}
        ]

        dirList.addPerson = function() {
            dirList.list.push({name:dirList.name, age: dirList.age})
            dirList.name = ''
            dirList.age = 0
        }
    })