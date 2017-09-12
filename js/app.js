'use strict';

function Project(name, url, about, image) {
  this.name = name;
  this.url = url;
  this.about = about;
  this.image = image;
  this.createAppend = function(elementType, parentNode) {
    return parentNode.appendChild(document.createElement(elementType));
  };
  this.render = function() {
    var anchor = document.getElementById('projectSection');
    var div = this.createAppend('div', anchor);
    var a = this.createAppend('a', div);
    var img = this.createAppend('img', div);
    var p = this.createAppend('p', div);
    a.setAttribute('href', this.url);
    a.innerText = this.name;
    img.src = this.image;
    p.innerText = this.about;
  }
  this.render();
}

var busMaul = new Project('Busmall', 'https://github.com/gabrielx52/bus-mall', 'About busmall', '../imgs/busMall.png')
