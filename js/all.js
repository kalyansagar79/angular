
/*module*/
var app = angular.module("myApp",[]);

/*controller*/
app.controller("header",function($rootScope,$scope){
    $scope.name= "kalyan";
    $rootScope.test=123;
   
    
    
    
});

app.controller("section",function($rootScope,$scope){
    $scope.name = "sagar";

    $scope.testJson = [

    { "name" : "kalyan", "email":"kalyan@gmail.com", "cell": 1234, "jobType":"software"},
    { "name" : "sagar", "email":"sagar@gmail.com", "cell": 2345, "jobType":"hardware"},
    { "name" : "siri", "email":"siri@gmail.com", "cell": 3456, "jobType":"software"},
    { "name" : "akila", "email":"akila@gmail.com", "cell": 4567, "jobType":"hardware"},
    { "name" : "chinnu", "email":"chinnu@gmail.com", "cell": 5678, "jobType":"software"},
    { "name" : "lokesh", "email":"lokesh@gmail.com", "cell": 6789, "jobType":"clerk"},
    { "name" : "sandeep", "email":"sandeep@gmail.com", "cell": 7891, "jobType":"electrician"},
    { "name" : "charan", "email":"charan@gmail.com", "cell": 8912, "jobType":"software"},
    { "name" : "teja", "email":"teja@gmail.com", "cell": 9123, "jobType":"govt"},
    { "name" : "deepthi", "email":"deepthi@gmail.com", "cell": 9999, "jobType":"software"},
]
});

app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});

// console.log(testJson[2].jobType);