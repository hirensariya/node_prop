
const express = require('express');
const app = express();
const regularRoutes = require('./routes/regular');
// const serviceRoutes = require('./routes/service-req');
const mongoose = require('mongoose');

const dburl = "mongodb+srv://hiren:hirens4Ar@@cluster0.aiorq.mongodb.net/prop?retryWrites=true&w=majority";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));

app.use(regularRoutes);
// app.use(serviceRoutes);








