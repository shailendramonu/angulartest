// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('TodoController', ['$scope', '$state', 'Todo', function($scope,
      $state, Todo) {
    $scope.todos = [];
    $scope.alerts = [];
    function getTodos() {
      Todo
        .find()
        .$promise
        .then(function(results) {
          $scope.todos = results;
        });
    }
    getTodos();

    $scope.addTodo = function() {
      Todo
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.alerts.push({ type: 'success', message: 'Item added successfully!'});
          $scope.todoForm.content.$setPristine();
          $('.focus').focus();
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          $scope.alerts.push({ type: 'danger', message: 'Item removed successfully!'});
          getTodos();
        });
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    }
  }]);
