const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection form successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   let user1 = new User({
//     username: "Mohammad Altaf Khan",
//     email: "altaf@gmail.com",
//   });

//   let post1 = new Post({
//     content: "Stand With Palestine",
//     likes: 898,
//   });

//   post1.user = user1;
//   let resU = await user1.save();
//   let resP = await post1.save();

//   console.log(resU);
//   console.log(resP);
// };

// addData();

const addData = async () => {
  let user1 = await User.findOne({ username: "Mohammad Altaf Khan" });

  let post2 = new Post({
    content: "Inshallah we will win at the end!",
    likes: 999,
  });

  post2.user = user1;
  await post2.save();
};
// addData();

// using a populate

const getData = async () => {
  let result = await Post.find({}).populate("user", "username");
  console.log(result);
};

getData();

//delete

// const deleteUser = async () => {
//   let res = await User.findByIdAndDelete("6810b9567b6a3c83d886b4de");
//   await Post.findByIdAndDelete("6810ba6c01ff9e73b701f1dd");

//   console.log(res);
// };
// deleteUser();
