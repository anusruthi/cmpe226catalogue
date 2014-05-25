var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('port',  process.env.PORT || 3000 || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//HTML indention
app.locals.pretty = true;


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/eCommerce');

var SchemaPath = __dirname + '/schema/db';
var models = require(SchemaPath);
var category = mongoose.model('cat');


app.get('*', function(req, res, next) {
  // put user into res.locals for easy access from templates
    category.find().distinct('category', function(error, cats) {
        app.locals.navigation = cats;
    });
  next();
});


app.get('/', routes.index);
app.get('/category/:cat', routes.cat);
app.get('/search/', routes.search);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


http.createServer(app).listen(app.get('port'), function (){
    console.log('express is listening at ' + app.get('port'));
});