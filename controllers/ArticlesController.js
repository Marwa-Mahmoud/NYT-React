const db = require("../models")

module.exports = {

    findAll: function(req, res){
        db.Article
            .find()
            .sort({date: -1})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: function(req, res){
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    remove: function(req, res){
        db.Article
            .remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}