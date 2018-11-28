var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", (req,res) => {
    if (!req.user) {
        res.render('index');
    }
    else {
        res.render('index', { userid: req.user.id });
    }
});