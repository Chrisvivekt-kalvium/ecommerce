const express = require("express");
const mongoose = require("mongoose");
const product = require("../model/product");
const User = require("../model/user");
const  router = express.Router();
const {pupload} = require("../multer");

const validateProductData = (data)=>{
    const error = [];

    if(!data.name) error.push("Product name is required");
}