/**
*   Load modules
*/

var express = require('express')
,   hbs     = require('express-hbs')
,   app     = express()
,   r       = require('rethinkdb');

/**
*   Define parameters
*/
var port    = process.env.PORT || 3000;

/**
*   Activate middleware
*/
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/pages');
app.use(express.static('public'));

/**
*   Initialize routers
*/
app.get('/', function(req, res) {
  res.render('index', {title: 'Northern Equity Financial'});
});

app.get('/anypage', function(req, res) {
  res.render('typical', {title: 'Typical Page'});
});

/**
*   Test database
*/
r.connect({host: '#', port: 28015, db: 'test'}, function(err, conn) {
  exports.db = conn;
});


/**
*   Start server
*/
app.listen(port, function() {
  console.log('Server listening on port %s', port)
});
