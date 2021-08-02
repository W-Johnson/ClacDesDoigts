'use strict';


var mongoose = require('mongoose'),
    Chicken = mongoose.model('Chicken');

exports.list_all_tasks = function(req, res) {
    Chicken.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.create_a_task = function(req, res) {
    var new_task = new Chicken(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.read_a_task = function(req, res) {
    Chicken.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function(req, res) {
    Chicken.findOneAndUpdate({name: req.params.chickenName}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function(req, res) {
    Chicken.remove({
        name: req.params.chickenName
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Chicken went to KFC' });
    });
};

exports.run = function(req, res) {
    Chicken.updateMany({}, {$inc:{"steps":1}}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};