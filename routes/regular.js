const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const Product = require('../models/product');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
app.get('/', function (req, res) {
  Product.find()
    .then(result => {
      const newdata = result.filter(function (ndata) {
        return ndata.cat == "Flat";
      });
      res.render('index', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
        data: newdata,
        alldata: result,
      })
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/home', function (req, res) {
  Product.find()
    .then(result => {
      const newdata = result.filter(function (ndata) {
        return ndata.cat == "Flat";
      });
      res.render('home', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
        data: newdata,
        // alldata:result,
      })
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/shop', function (req, res) {
  Product.find()
    .then(result => {
      const newdata = result.filter(function (ndata) {
        return ndata.cat == "Shop";
      });
      res.render('shop', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
        data: newdata,
        // alldata:result,
      })
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/plot', function (req, res) {
  Product.find()
    .then(result => {
      const newdata = result.filter(function (ndata) {
        return ndata.cat == "Plot";
      });
      res.render('plot', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
        data: newdata,
        alldata: result,
      })
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/adddetail', function (req, res) {
  res.render('adddetail', {

    title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
    descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",

  })
});
// app.get('/detail', function (req, res) {
//   res.render('detail', {
//     title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
//     descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",

//   })
// });
app.get('/gallery', function (req, res) {
  res.render('gallery', {
    title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
    descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",

  })
});
app.get('/contact', function (req, res) {
  res.render('contact', {
    title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
    descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",

  })
});
app.post('/add', upload.single('upimage'), function (req, res) {
  const product = new Product({
    cat: req.body.cat,
    profor: req.body.profor,
    upimage: req.file.path,
    price: req.body.price,
    titlename: req.body.titlename,
    dis: req.body.dis,
    address: req.body.address,
    bedroom: req.body.bedroom,
    holl: req.body.holl,
    kitchen: req.body.kitchen,
    bathroom: req.body.bathroom,
    belcony: req.body.belcony,
    gym: req.body.gym,
    cctv: req.body.cctv,
    securitygard: req.body.securitygard,
    playground: req.body.playground,
    agentname: req.body.agentname,
    agentphone: req.body.agentphone,
  });
  product.save()
    .then(result => {
      res.redirect('/adddetail');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.post('/shopadd', upload.single('upimage'), function (req, res) {
  const product = new Product({
    cat: req.body.scat,
    profor: req.body.sprofor,
    upimage: req.file.path,
    price: req.body.price,
    titlename: req.body.titlename,
    dis: req.body.dis,
    address: req.body.address,
    floorno: req.body.floorno,
    Area: req.body.Area,
    cctv: req.body.cctv,
    far: req.body.securitygard,
    agentname: req.body.agentname,
    agentphone: req.body.agentphone,
  });
  product.save()
    .then(result => {
      res.redirect('/adddetail');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.post('/plotadd', upload.single('upimage'), function (req, res) {
  const product = new Product({
    cat: req.body.pcat,
    profor: req.body.newone,
    upimage: req.file.path,
    price: req.body.price,
    titlename: req.body.titlename,
    dis: req.body.dis,
    address: req.body.address,
    faside: req.body.faside,
    exgate: req.body.exgate,
    agentname: req.body.agentname,
    agentphone: req.body.agentphone,
  });
  product.save()
    .then(result => {
      res.redirect('/adddetail');
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/display', function (req, res) {
  // const product = new Product(req.body);
  Product.find()
    .then(result => {
      // res.redirect('/adddetail');
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });
});
app.get('/productdetail', function (req, res) {
  const id = req.query.id;
  Product.find()
    .then(result => {
      const newdata = result.filter(function (ndata) {
        return ndata._id == id;
        
      });
      res.render('detail', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
        data: newdata,
     
      })
    })
    .catch(err => {
      console.log(err);
      res.render('404')
    });

});
app.get('/*', function (req, res) {
  res.render('404', {
    title: "404",
    descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
  })
});
module.exports = app;
