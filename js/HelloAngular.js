
/**
 * Created by XiYin 2017/1/5.
 */
/**
 * 全局函数，污染去全局空间，使用模块化实现
 * @param $scope
 * @constructor
 */
/*function HelloAngular($scope) {
    $scope.greeting = {
        text:'Hello'
    };
}*/
var helloModule = angular.module('HelloAngular',[]);
helloModule.controller('helloNgCtrl',['$scope',function($scope){
    $scope.greeting = {
        text: 'hello'
    };
}]);