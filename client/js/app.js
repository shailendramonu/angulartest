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
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      })
      .state("details", {
        url: '/todo/:id',
        templateUrl: 'views/todo-details.html',
        controller: 'TodoDetailsController',
      });

    $urlRouterProvider.otherwise('todo');
  }]);
