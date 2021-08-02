'use strict';
module.exports = function(app) {
    var chicken = require('../controllers/chickenController');

    // todoList Routes
    app.route('/chicken')
        .get(chicken.list_all_tasks)
        .post(chicken.create_a_task)
        .put(chicken.create_a_task);

    app.route('/chicken/run')
        .get(chicken.run);

    app.route('/chicken/:chickenName')
        .get(chicken.read_a_task)
        .put(chicken.update_a_task)
        .patch(chicken.update_a_task)
        .delete(chicken.delete_a_task);
};
