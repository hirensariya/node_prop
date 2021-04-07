
const express = require('express');
const app = express();
const regularRoutes = require('./routes/regular');
// const serviceRoutes = require('./routes/service-req');
const mongoose = require('mongoose');

const dburl = "mongodb+srv://hiren:hirens4Ar@@cluster0.aiorq.mongodb.net/passport?retryWrites=true&w=majority";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(regularRoutes);
// app.use(serviceRoutes);







