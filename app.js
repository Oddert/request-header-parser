var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    ejs         = require('ejs');
    
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36'.match(/\(([^\)]+)\)/)
//     console.log(req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]);
    var output = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(output));
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server Initialising...");
})
