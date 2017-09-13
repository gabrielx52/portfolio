'use strict';

function Project(name, url, about, image) {
  this.name = name;
  this.url = url;
  this.about = about;
  this.image = image;
  Project.all.push(this);
}

Project.prototype.render = function() {
  var $template = $('template').clone();
  $template.attr('id', '');
  $template.find('a').attr('href', this.url);
  $template.find('img').attr('src', this.image);
  $template.find('p').text(this.about);
  $('projectSection').append($template);
};

Project.all = [];

Project.initializeTasks = function(){
  projects.forEach(taskObj => new Project(taskObj.name, taskObj.url, taskObj.about, taskObj.image));
  listTasks();
}

function listTasks(){
  Project.all.forEach(task => task.render());
}

Project.initializeTasks();
