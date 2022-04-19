'use strict';

angular.
module('todoList').
component('todoList', {
  templateUrl: 'todo-list/todo-list.template.html',
  controller: function TodoListController() {
    this.newTodoItem = '';
    this.search = '';

    this.addTodo = () => {
      this.todos.push({name: this.newTodoItem});
      this.newTodoItem = '';
    };

    this.todos = [
      {
        name: 'Nexus S',
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
      }, {
        name: 'MOTOROLA XOOM™',
      }
    ];
  }
});
