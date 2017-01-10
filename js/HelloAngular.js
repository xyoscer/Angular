
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
       .directive('confirmPwd',function(){ //指令定义用驼峰法
           return {
               require:'ngModel',
               restrict:'AE',//匹配模式 A属性
               scope:{orgTxt: '=confirmPwd'},
               //link的作用是在模型和视图之间建立关联，包括在元素上注册事件监听
               link: function(sco,ele,att,con) {
                   con.$validators.confirmPwd = function(v) {
                       return  v === sco.orgTxt;
                   };
                   sco.$watch('orgTxt',function() {
                       con.$validate();
                   });
               }
           };
       });