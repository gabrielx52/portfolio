'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.displayProjects = function() {
    app.Project.fetchAll();
    // $('#articles').hide();
    // $('#about').show();
  }
  module.projectController = projectController;
})(app);
