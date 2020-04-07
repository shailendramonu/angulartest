// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      })
      .state('list', {
        url: '/list/:id',
        templateUrl: 'views/todolist.html',
        controller: 'TodoListController'
      });

    $urlRouterProvider.otherwise('todo');
  }]);
