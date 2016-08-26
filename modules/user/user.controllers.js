'use strict';

var User = require('mongoose').model('User');
var List = require('mongoose').model('List');


exports.findById = function(req, res, next) {
    User.findById(req.params.userId, function(err, user){
        console.log(user);
        res.send(user)
    });
};

exports.find = function(req, res, next) {
    User.find({}, function(err, users){
        console.log(users);
        res.send(users)
    });
};



exports.updateById = function(req, res, next) {




    var query = { _id: req.params.userId };
    User.update(query, req.body,  function(err, user){
        console.log(err);
        res.send(user);
    });

    /**
    User.findById(req.params.userId, function(err, user){
        console.log(user);

        user.flareemail = req.body.data.email;
        user.flaresms = req.body.data.sms;
        user.flaretel = req.body.data.tel;
        user.status = req.body.data.status;

        user = req.body.data;
        user.save();
        res.send(user)
    });**/
};