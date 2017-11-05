const router = require("express").Router();
const express = require('express')
const app = express()
const articlesController =  require("../../controllers/ArticlesController.js")

router.route('/')
        .get(articlesController.findAll)
        .post(articlesController.create)


router.route('/:id')
        .delete(articlesController.remove)
      
module.exports = router;
