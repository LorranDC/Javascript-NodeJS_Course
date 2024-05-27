exports.globalMiddleware = (req, res, next) => {
    res.locals.aLocalVariable = 'This will be the local variable.';
    next();
};

exports.anotherMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}