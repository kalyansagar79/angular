var app = angular.module("myApp", ['ui.router']);
app.config(function ($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './home.html',
        controller: "homeCtrl"
    }

    var emailState = {
        name: 'email',
        url: '/email',
        templateUrl: './email.html',
        controller: "emailCtrl"
    }
    var contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: './contact.html',
        controller: "contactCtrl"
    }

    var footer1State = {
        name: 'footer1',
        url: '/footer1',
        templateUrl: './footer1.html',
        controller: "footer1Ctrl"
    }

    var footer2State = {
        name: 'footer2',
        url: '/footer2',
        templateUrl: './footer2.html',
        controller: "footer2Ctrl"
    }




    $stateProvider.state(homeState);
    $stateProvider.state(emailState);
    $stateProvider.state(contactState);
    $stateProvider.state(footer1State);
    $stateProvider.state(footer2State);
    

});
