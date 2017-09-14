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

$('.aboutTab').on('click', function() {
  $('#aboutBlock').toggle('.hide');
  $('#cardPhoto').toggle('.hide');
})

function listProjects(){
  Project.all.forEach(project => project.render());
}

Project.initializeProjects();
