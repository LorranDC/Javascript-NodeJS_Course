exports.globalMiddleware = (req, res, next) => {
    res.locals.aLocalVariable = 'This will be the local variable.';
    next();
};


exports.anotherMiddleware = (req, res, next) => {
    next();
};
