'use strict';

var app = app || {};

page('/', app.homeController.displayHome);
page('/about', app.aboutController.displayAbout);
page('/projects', app.projectController.displayProjects);
page();
