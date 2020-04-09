const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');
const authRouter = require('./routers/authentication');
const { logger } = require('./middleware');

const app = express();
const port = process.env.PORT || 3333;

//tools
app.use(bodyParser.json());
app.use(logger);

//define routes
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('connected - please visit /auth/login or /auth/signup to get started')
});

app.listen(port, () => {
  console.log(`live on port ${port}`)
});