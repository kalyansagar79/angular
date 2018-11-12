var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider){
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl:'./home.html',
        controller: "homeCtrl"
    }

var emailState = {
    name: 'email',
    url: '/email',
    templateUrl:'./email.html',
    controller: "emailCtrl"
}
$stateProvider.state(homeState);
$stateProvider.state(emailState);
});
