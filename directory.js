angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/')

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '/static/home.html',
            controller: 'directoryController as dirList'
        })

        .state('about', {
            url: '/about',
            templateUrl: '/static/about.html'
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
    .directive('directoryPerson', function() {
        return {
            templateUrl: 'directory-person.html'
        }
    })