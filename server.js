'use strict';

const EXPRESS = require('express');
const PORT = 3000;
const APP = EXPRESS();

APP.use(EXPRESS.static('public'));

APP.listen(PORT);

APP.get('/', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});
