
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
 angular.module('myApp',[])
       .controller('SignUpController',function($scope){
         $scope.userdata = {};
         $scope.submitForm = function() {
               console.log($scope.userdata);
              if($scope.signUpForm.$invalid){
                alert("请填写完信息");
              }else {
                 alert("注册成功");
             }
          };
       })
       .directive('compare',function(){
           return {
               require:'ngModel',
               restrict:'A',//匹配模式 A属性
               scope:{orgTxt: '=compare'},
               link: function(sco,ele,att,con) {
                   con.validators.compare = function(v) {
                       return  v === sco.orgTxt;
                   };
               }
           };
          /*var obj = {};
           obj.restrict = 'AE';
           obj.scope = {orgText: '=compare'};
           obj.require = 'ngModel';
           obj.link = function(sco,ele,att,ngModel) {
               ngModel.$validators.compare = function(v) {
                   return v == sco.orgText;
               };
               sco.$watch('orgText',function(){
                   ngModel.$validate();
                   });
           };
           return obj;*/
       });