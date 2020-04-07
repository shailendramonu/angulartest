angular
  .module('app')
  .controller('TodoListController', ['$scope', '$stateParams', 'Todo',
    function($scope, $stateParams, Todo) {
      function getTodo() {
        Todo
          .findById({ id: $stateParams.id })
          .$promise
          .then(function(results) {
            $scope.todo = results;
          });
      }
      $scope.listId = $stateParams ? $stateParams.id : null;
      getTodo();
    }
  ])