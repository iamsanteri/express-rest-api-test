const utility = require("./utility.js")
const express = require("express")
const helmet = require("helmet")
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(helmet());
app.set('view engine', 'ejs')
app.use(express.static("styles"));
app.use(bodyParser.urlencoded({extended: true}));

var answer

// Routes
app.get("/", function(req, res) { 
    res.render("home");
})

app.post("/postData", function(req, res) {
    console.log(req.body.message)
    res.redirect("/")
})

app.get("/msft", async function(req, res) {
    answer = await utility.dataGetter("MSFT")
    res.send("The retrieved data is as follows: " + answer)
})

app.get("/aapl", async function(req, res) { 
    answer = await utility.dataGetter("AAPL")
    res.send("The retrieved data is as follows: " + answer)
})

app.get("/orcl", async function(req, res) {
    answer = await utility.dataGetter("ORCL")
    res.send("The retrieved data is as follows: " + answer)
})

// Open server and start listening 
app.listen(port, () => console.log("Example app listening at http://localhost:" + port))