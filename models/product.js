const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    cat: {
        type: String,
        required: true,
    },
    profor: {
        type: String,
        required: true,
    },
    upimage: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    titlename: {
        type: String,
        required: true,
    },
    dis: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bedroom: {
        type: Number,
        // required: true,
    },
    holl: {
        type: Number,
        // required: true
    },
    kitchen: {
        type: Number,
        // required: true
    },
    bathroom: {
        type: Number,
        // required: true
    },
    belcony: {
        type: String,
        // required: true
    },
    gym: {
        type: String,
        // required: true
    },
    cctv: {
        type: String,
        // required: true
    },
    securitygard: {
        type: String,
        // required: true
    },
    playground: {
        type: String,
        // required: true
    },
    floorno: {
        type: Number,
        // required: true,
    },
    Area: {
        type: String,
        // required: true
    },
    far: {
        type: String,
        // required: true
    },
    faside: {
        type: String,
        // required: true,
    },
    exgate: {
        type: Number,
        // required: true
    },
    agentname: {
        type: String,
        required: true,
    },
    agentphone: {
        type: Number,
        required: true,
    },
    
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;