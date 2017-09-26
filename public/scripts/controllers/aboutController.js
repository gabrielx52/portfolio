'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.displayAbout = function() {
    app.Project.fetchAll();
    $('#homeBlock').hide();
    $('#aboutBlock').show();
  }
  module.aboutController = aboutController;
})(app);
