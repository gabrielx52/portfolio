'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.displayHome = function() {
    $('article').hide();
    $('#homeBlock').show();
    $('#aboutBlockLarge').show();
  }
  module.homeController = homeController;
})(app);
