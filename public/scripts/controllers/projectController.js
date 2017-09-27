'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  app.Project.fetchAll();
  projectController.displayProjects = function() {
    $('article').hide();
    $('#portfolioBlock').show();
  }
  module.projectController = projectController;
})(app);
