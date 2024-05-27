exports.homePage = (req, res, next) => {
    res.render('index');
    return;
};

exports.treatsPost = (req, res) => {
    res.send(req.body);
    return;
};