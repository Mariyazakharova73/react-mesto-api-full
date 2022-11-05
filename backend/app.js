const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { errors } = require('celebrate');
const usersRouter = require('./routes/usersRouter');
const cardsRouter = require('./routes/cardsRouter');
const { createUser, login } = require('./controllers/usersController');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');
const { validateLogin, validateUser } = require('./utils/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const corsSetting = require('./middlewares/cors-setting');

const { PORT = 3000 } = process.env;
const app = express();
// пишем выше роутинга
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger); // подключаем логгер запросов
app.use(corsSetting);
app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);
app.use(auth, usersRouter);
app.use(auth, cardsRouter);
app.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Неправильный URL или метод'));
});

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // обработчик ошибок celebrate

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

app.listen(PORT);
