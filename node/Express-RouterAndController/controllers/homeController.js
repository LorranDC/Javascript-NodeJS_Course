exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Customer name: <input type="text" name="name"><br>
    Another field: <input type="text" name="anotherfield">
    <button>Send</button>
    </form>
    `);
};

exports.treatsPost = (req, res) => {
    res.send("Hey, i'm your new POST route.");
}