'use strict';

const lumberjack = (req, res, next) => {
    console.log(`Request method: ${req.method} --- Request path: ${req.path}`);
    next();
}

module.exports = lumberjack;
