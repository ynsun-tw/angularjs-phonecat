'use strict';

angular.
module('todoDetail').
component('todoDetail', {
  template: 'TBD: Detail view for <span>{{$ctrl.todo}}</span>',
  controller: ['$routeParams',
    function TodoDetailController($routeParams) {
      this.todo = $routeParams.name;
    }
  ]
});
