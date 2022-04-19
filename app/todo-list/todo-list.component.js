'use strict';

angular.
module('todoList').
component('todoList', {
  templateUrl: 'todo-list/todo-list.template.html',
  controller: function TodoListController() {
    this.todos = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
});
