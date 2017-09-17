'use strict';

function Project(name, url, about, image, color) {
  this.name = name;
  this.url = url;
  this.about = about;
  this.image = image;
  this.color = color;
  Project.all.push(this);
}


Project.prototype.toHtml = function() {
  var projectTemplate = Handlebars.compile($('#article-template').html());
  return projectTemplate(this);
}

Project.all = [];

Project.initializeProjects = function(){
  projects.forEach(projObj => new Project(projObj.name, projObj.url, projObj.about, projObj.image, colorPicker()));
  listProjects();
}

var navHandler = function(){
  $('article').hide();
  $('#homeBlock').show();
  $('.tab').on('click', function(){
    $('ul').hide();
    $('article').hide();
    $('#' + $(this).attr('data-content')).show();
  })
}

function listProjects(){
  Project.all.forEach(project => $('#projectSection').prepend(project.toHtml()));
}

function colorPicker(){
  var colors = ['#f58b71', '#e6b25d', '#519d9d', '#9c9746'];
  return colors[Math.round(Math.random() * (colors.length - 1) + 1)];
}

$('#hamburger').on('click', function(){
  $('ul').show();
})

Project.initializeProjects();
navHandler();
