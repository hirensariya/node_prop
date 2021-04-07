const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.render('index', {
      title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
      descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
      
    })
  });
app.get('/detail', function (req, res) {
    res.render('detail', {
        title: "Buy/Sale/Rent Properties | Real Estate Property Agents | Propertyagents.co.in",
        descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
      
    })
  });
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

  app.get('/*', function (req, res) {
    res.render('404', {
      title: "404",
      descrition: "Looking for best Real Estate Properties in India? We are Most Renowned Real Estate Consultants and Property Agents for dealing best properties in India. Now Buy, Sell, Rent residential and commercial properties without any hassle at Propertyagents.co.in",
       })
  });
module.exports = app;
