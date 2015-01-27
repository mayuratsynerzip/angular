/**
 * Created by mayurk on 1/23/2015.
 */
angular.module("todo")
.controller("MainCtrl",["$scope","TodoService", function($scope, TodoService){
    $scope.todos = TodoService.todos;

    $scope.add = function(){
        TodoService.add($scope.newTodos);
        $scope.newTodos = {};
    }
    /*
     $scope.keypress = function() {
     if(event.keyCode == 33) {
     $scope.add();
     }
     }*/
    $scope.delete = function(item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index,1);
    }
    $scope.clearCompleted = function () {
        TodoService.clearCompleted();
    }
    $scope.clearAll = function () {
        TodoService.clearAll();
    }
}]);