const mongoose = require("mongoose");

main().then(res=>{
    console.log("connection successfull!");
}).catch(err=>{
    console.log("The error is ",err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/warehouse");
}

const bookSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        
    },
    price:{
        type:Number,
        min:[1,"Plese enter a valid price!"],
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
});

let Book =  mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title:"Eat That Frog",
//     author:"Brian Tracy",
//     price:543,
//     genre:["self improvement","time management"],
//     category:"non-fiction",
// });

// book1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log("The error is ",err);
// });

let book2 = new Book({
    title:"Atmic Habbit",
    author:"James Clear",
    price:1893,
    genre:["habbits","self improvement"],
    category:"non-fiction",
})

book2.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
