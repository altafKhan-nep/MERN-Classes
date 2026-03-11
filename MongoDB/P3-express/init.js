const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(res=>{
    console.log("Connection Form successfully")
}).catch(err => console.log("the error in connection forming that is",err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatSapp');
}

let allChats = [
    {
        from:"Altaf Khan",
        to:"Hamas",
        msg:"Inshallah we will be victor at the end.",
        created_at:new Date()
    },
    {
        from:"Ayotallah Ali Khaminie",
        to:"Palestine",
        msg:"Soon we will erase the isreal from map.",
        created_at:new Date()
    },
    {
        from:"Hamas",
        to:"Muslim",
        msg:"we are fighting for our freedom and for Al Aqsa mosque!",
        created_at:new Date()
    },
    {
        from:"Bangladesh",
        to:"Goverment",
        msg:"Give me a way to go palestine .we will fight for Our land (palestine)",
        created_at:new Date()
    },
    {
        from:"Mohammad Altaf",
        to:"world",
        msg:"Death To Isreal",
        created_at:new Date()
    },
    {
        from:"Altaf Khan",
        to:"Palestine",
        msg:"We muslim always stand with you.",
        created_at:new Date()
    }
];

Chat.insertMany(allChats);