const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

//post to PATCH in form in edit.ejs
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


//convert into text
app.use(express.urlencoded({extended:true}));

//importing id
const { v4: uuidv4 } = require('uuid');
app.use(express.static(path.join(__dirname, 'public')));

//to set view to access fromm any where
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//to setup of path with public
app.use(express.static(path.join(__dirname,"public")));


//creating a array of posts
let posts = [
    {
        id:uuidv4(),
        username:"i.altaf.khan",
        image:'/img/pro.jpg',
        likes:0,
    },
    {
        id:uuidv4(),
        username:"hamas",
        image:'/img/stand.jpg',
        likes:0,
    },
    {
        id:uuidv4(),
        username:"axisOfResitance",
        image:'/img/domeOfRock.jpg',
        likes:0,
    }
]
// to get data of all posts

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//getting a data for a new posts

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})


//adding new post 
app.post("/posts",(req,res)=>{
    let { username, image } = req.body;

    //genrate  new id for post
    let id = uuidv4();
    //pass id ,username,content TO new post
    posts.push({id,username,image });
    res.redirect("/posts");
})

//to get a datail of a posts
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post =posts.find((p) =>id === p.id);

    res.render("show.ejs",{post})
})

//to ubdate a specific post
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newImage = req.body.image;
    let post = posts.find((p) => id === p.id);
    post.image = newImage;
    
    res.redirect("/posts");

});

//create form update
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id ===p.id);

    res.render("edit.ejs",{post})
});
//deleting a post

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

//adding like buttons

app.post("/posts/:id/like",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    if(post){
        post.likes += 1;
    }
    res.redirect("/posts");
})
app.listen(port,()=>{
    console.log("listining from port 8080")
});