'use strict';

module.exports = (req, res) => {
    res.status(404).send({
        error: 404,
        route: req.path,
        msg: 'Error 404 - Route Not Found'
    })
}