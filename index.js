//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const posts = [];

app.get("/", function(req, res){
    res.render("home", { pageName: "Home" });
});

app.get("/posts", function(req, res){
    res.render("posts", { pageName: "Posts", posts: posts });
});

app.post("/", function(req, res){
    const Post = {
        title: req.body.blogTitle,
        content: req.body.blogContent,
        postDate: date.getDate()
    };
    
    posts.push(Post);

    res.redirect("/posts");
});







app.listen(proc.env.PORT || 3000, function(){
    console.log("Server is running on port 3000.");
});