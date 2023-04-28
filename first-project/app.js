var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//실습5 ejs
const templateRouter = require('./routes/template')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 실습3
//use - 어떤 요청이들어와도 한번씩은 실행
//middleware 발생
/*
app.use((req,res,next) => {
  console.log("middleware!!");
  next();
})
*/


//해당 슬래쉬로 요청을 보내면 indexRouter로 요청을 옮김!!
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template', templateRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
