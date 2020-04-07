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

    function addAlert(type, msg) {
        $scope.alerts.push({type, msg});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
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
          $scope.todoForm.content.$setPristine();
          $('.focus').focus();
          addAlert('success', 'Item added successfully!');
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          addAlert('danger', 'Item removed successfully!');
          getTodos();
        });
    };
  }]);
