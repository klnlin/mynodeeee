import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //res.send("Hello, World");
    //console.log(req)
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>about me</h1><p>my name is cream</p>");
});

app.get("/contact", (req, res) => {
    res.send(`<h1>Contact Me</h1><img src="gluta.jpg">`);
});

app.listen(port, () => {
    console.log(`server running on port ${port}.`);
});