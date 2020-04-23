angular
  .module('app')
  .controller('TodoDetailsController',
    ['$scope', '$stateParams','Todo',
      function($scope, $stateParams, Todo) {
        function getTodos() {
          Todo
            .findOne({id: $stateParams.id})
            .$promise
            .then(function(todo) {
              $scope.id = todo.id;
              $scope.content = todo.content;
            });
        }
        getTodos();

  }]);
