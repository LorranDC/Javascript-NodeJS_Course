const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Customer name: <input type="text" name="name"><br>
    Another field: <input type="text" name="anotherfield">
    <button>Send</button>
    </form>
    `);
});

app.get('/tests/:idUsers?/:parameters?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`What you sent me was: ${req.body.name}`);
});

app.listen(3000, ()=>{
    console.log('Acess http://localhost:3000');
    console.log('Server running on port 3000');
});
