const Express = require('express');
const FS = require('fs');
const Path = require('path');
const BodyParser = require('body-parser');

const app = Express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

const pageRoutes = require('./routes/pages');
const contactRoutes = require('./routes/contact');

app.use(BodyParser.urlencoded({ extended: false }));
app.use(Express.static(Path.join(__dirname, 'client','public')));

app.set('view engine', 'ejs');
app.set('views', './client/views');

app.use((req, res, next) => {
  console.log(req.connection.remoteAddress);
  next();
});
app.use(pageRoutes);
app.use(contactRoutes);

module.exports = app;