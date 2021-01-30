const express = require('express');
const knex = require('knex');
const passport = require('passport');

const DI = require('./services/di');
const config = require('./services/config');
const dbConnection = knex(config.getDBCredentials());

// DB connection
DI.setConfig(config);
DI.set('dbConnection', dbConnection);

const AppError = require('./errors/app-error');
const globalErrorHandler = require('./errors/global-error-handler');
const articleRouter = require('./routes/article-routes');
const userRouter = require('./routes/user-routes');
const authRouter = require('./routes/auth-routes');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Passport middleware
app.use(passport.initialize());
require('./services/passport')(passport);

// Routes
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

// Errors
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
