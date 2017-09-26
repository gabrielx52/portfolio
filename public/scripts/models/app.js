'use strict';

var app = app || {};

(function(module){
  function Project(rawDataObj) {
    this.name = rawDataObj.name;
    this.url = rawDataObj.url;
    this.about = rawDataObj.about;
    this.image = rawDataObj.image;
    Project.all.push(this);
  }


  Project.fetchAll = function() {
    navHandler();
    localStorage.rawData ?
      Project.initializeProjects(JSON.parse(localStorage.rawData)) :
      $.get('data/projects.json', function(response) {
        localStorage.setItem('rawData', JSON.stringify(response))
        Project.initializeProjects(response);
      })
  }

  Project.prototype.toHtml = function() {
    let projectTemplate = Handlebars.compile($('#article-template').html());
    return projectTemplate(this);
  }

  Project.all = [];

  Project.initializeProjects = function(rawData){
    rawData.map(element => new Project(element))
    listProjects();
  }

  function colorPicker(){
    let colors = ['#f58b71', '#e6b25d', '#519d9d', '#9c9746'];
    return colors[Math.round(Math.random() * (colors.length - 1) + 1)];
  }


  function navHandler(){
    $('#hamburger').on('click', () => { $('ul').show() });
    $('article').hide();
    $('#homeBlock').show();
    $('.tab').on('click', function(){
      $('article').hide();
      $('ul').hide();
      $('#' + $(this).attr('data-content')).show();
    })
  }

  function listProjects(){
    Project.all.forEach(project => $('#projectSection').prepend(project.toHtml()));
  }
  module.Project = Project;
})(app)
