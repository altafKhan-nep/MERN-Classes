const express = require("express");
const app = express();
const port = 3000;
const { userInfo } = require("os");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended:true}));


// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username:"Mohammad Altaf Khan",
        content:"if you Stand with the People Of Palestine then you stand right side of history."
    },
    {
        id:uuidv4(),
        username:"Hamas",
        content:"Soon we destroy teror state isreal"
    },
    {
        id:uuidv4(),
        username:"Khaminie",
        content:"I stand with people of palestine"
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    //genrate  new id for post
    let id = uuidv4();
    //pass id ,username,content TO new post
    posts.push({id,username,content })
    res.redirect("/posts");
})
// to get one post (using id)

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    res.render("show.ejs", { post });
});

// update specific post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent; 
    console.log(post);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.redirect("/posts");

})

// Create Form Update
app.get("/posts/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post})
})
//to delete specific post

app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts")
})
app.listen(port,()=>{
    console.log(`Listing From ${port}`);
});