'use strict';

function Project(name, url, about, image) {
  this.name = name;
  this.url = url;
  this.about = about;
  this.image = image;
  Project.all.push(this);
}

Project.prototype.render = function() {
  var $template = $('#template').clone();
  $template.find('h2').text(this.name);
  $template.attr('id', '').attr('href', this.url);
  $template.find('img').attr('src', this.image);
  $template.find('p').text(this.about);
  $('#projectSection').prepend($template);
};

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
  Project.all.forEach(project => project.render());
}

Project.initializeProjects();
navHandler();
