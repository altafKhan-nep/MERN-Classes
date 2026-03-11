const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

// Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connection formed successfully");
  })
  .catch((err) => console.log("Connection error:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatSapp");
}

// Async wrapper for error handling
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// ROUTES

// Home
app.get("/", (req, res) => {
  res.send("Root is working perfectly!");
});

// Index route
app.get("/chats", asyncWrap(async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
}));

// New chat form
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create chat
app.post("/chats", asyncWrap(async (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from,
    msg,
    to,
    created_at: new Date()
  });
  await newChat.save();
  console.log("Chat was saved successfully!");
  res.redirect("/chats");
}));

// Show chat (you can make a show.ejs to display it)
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    return next(new ExpressError(404, "Chat Not Found"));
  }
  res.render("show.ejs", { chat }); // Assumes you have a show.ejs
}));

// Edit chat form
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
}));

// Update chat
app.put("/chats/:id", asyncWrap(async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  await Chat.findByIdAndUpdate(id, { msg: newMsg }, { new: true, runValidators: true });
  res.redirect("/chats");
}));

// Delete chat
app.delete("/chats/:id", asyncWrap(async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log("Deleted:", deletedChat);
  res.redirect("/chats");
}));

// Mongoose validation error handler
const handleValidationError = (err)=>{
    console.log("Validation Error: Please follow the form rules.");
    console.log(err.message);
    return err;
}

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// Generic error handler
app.use((err, req, res, next) => {
  let { status = 500, message = "ERROR FOUND" } = err;
  res.status(status).send(message);
});

// Start server
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
