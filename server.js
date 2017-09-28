'use strict';

const EXPRESS = require('express');
const PORT = 3000;
const APP = EXPRESS();
const REQUEST_PROXY = require('express-request-proxy');


APP.use(EXPRESS.static('public'));

APP.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

APP.get('/github/*', proxyGitHub)

function proxyGitHub(req, res, next){
  (REQUEST_PROXY({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

APP.get('*', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});
