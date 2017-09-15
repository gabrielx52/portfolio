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
  var context = {
    name: this.name,
    url: this.url,
    about: this.about,
    image: this.image
  }
  return projectTemplate(context);
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
