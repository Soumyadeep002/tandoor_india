const path = require("path");
const express = require("express");

const app = express();
const port = 5501;
console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (req, res) => {
    res.send("hello express");
})
app.get("/booking", (req, res) => {
    res.send("This will be booking page");
})

app.listen(port, () =>{
    console.log(`starting server on port ${port}`);
})