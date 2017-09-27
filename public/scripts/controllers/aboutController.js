'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.displayAbout = function() {
    $('article').hide();
    $('#aboutBlock').show();
  }
  module.aboutController = aboutController;
})(app);
