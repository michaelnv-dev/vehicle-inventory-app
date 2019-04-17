const app = require('./app');
const config = require('./config');
const port = config.app.PORT || 3000;

let server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});