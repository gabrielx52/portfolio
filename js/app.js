'use strict';

function Project(name, url, about, image) {
  this.name = name;
  this.url = url;
  this.about = about;
  this.image = image;
  Project.all.push(this);
}


Project.prototype.toHtml = function() {
  var projectTemplate = Handlebars.compile($('#article-template').html());
  return projectTemplate(this);
}

Project.all = [];

Project.initializeProjects = function(){
  projects.forEach(projObj => new Project(projObj.name, projObj.url, projObj.about, projObj.image));
  listProjects();
}

var navHandler = function(){
  $('article').hide();
  $('#homeBlock').show();
  $('.tab').on('click', function(){
    $('article').hide();
    $('#' + $(this).attr('data-content')).show();
  })
}

function listProjects(){
  Project.all.forEach(project => $('#projectSection').prepend(project.toHtml()));
}

Project.initializeProjects();
navHandler();
