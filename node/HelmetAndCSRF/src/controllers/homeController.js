exports.homePage = (req, res) => {
    res.render('index', {
        title: 'This will be the page title',
        numbers: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
};

exports.treatsPost = (req, res) => {
    res.send(req.body);
    return;
};