'use strict';

module.exports = () => {
    res.status(500).send({
        error: 500,
        route: req.path,
        query: req.query,
        body: req.body,
        msg: `Server Error: ${error.message}` 
    })
}