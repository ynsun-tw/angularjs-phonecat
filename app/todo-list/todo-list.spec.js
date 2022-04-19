'use strict';

describe('todoList', function () {

  beforeEach(module('todoList'));

  describe('TodoListController', () => {

    it('should create a `phones` model with 3 phones', inject(($componentController) => {
      const ctrl = $componentController('todoList');

      expect(ctrl.todos.length).toBe(3);
    }));

  });

});
