exports.homePage = (req, res) => {
    res.render('index');
};

exports.treatsPost = (req, res) => {
    res.send("Hey, i'm your new POST route.");
}