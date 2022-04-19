'use strict';

angular.
module('todoListApp').
config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
    when('/todos', {
      template: '<todo-list></todo-list>'
    }).
    when('/todo/:name', {
      template: '<todo-detail></todo-detail>'
    }).
    otherwise('/todos');
  }
]);
