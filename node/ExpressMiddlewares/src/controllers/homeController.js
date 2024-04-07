exports.homePage = (req, res, next) => {
    console.log('responding to the client');
    res.render('index');
    return;
};

exports.treatsPost = (req, res) => {
    res.send(req.body);
    return;
}