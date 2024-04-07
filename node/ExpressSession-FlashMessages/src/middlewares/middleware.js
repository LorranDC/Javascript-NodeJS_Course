exports.globalMiddleware = (req, res, next) => {
    if(req.body.customer) {
        console.log();

        console.log(`Saw that you posted ${req.body.customer}`);
        console.log();

    }
    next();
    };


    exports.anotherMiddleware = (req, res, next) => {
        next();
    };
