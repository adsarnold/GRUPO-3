var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cursoRouter = require('./routes/curso');
var myaccountRouter = require('./routes/myaccount');
<<<<<<< HEAD
var loginRouter = require('./routes/login');
var cursophp7Router = require('./routes/cursophp7');
=======
var loginRouter = require('./routes/login')
var cursophpRouter = require('./routes/cursophp');

>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3
var listRouter = require('./routes/list');
var detailsRouter = require('./routes/details');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'myApp', // Uma chave segura, podendendo ser qualquer string, para uma maior segurança procure algo como um UUID;
    resave: true, // Opção que diz para o servidor, que a sessão deve ser renovada a cada acesso;
    saveUninitialized: true, // Força uma sessão que não está inicializada para que seja salva na store;
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cursos', cursoRouter);
app.use('/myaccount', myaccountRouter);
app.use('/login', loginRouter);
<<<<<<< HEAD
app.use('/cursophp7', cursophp7Router);
=======
app.use('/cursophp', cursophpRouter)
>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3

app.use('/list', listRouter);
app.use('/details', detailsRouter);

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
