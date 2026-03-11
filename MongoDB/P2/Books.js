const mongoose = require("mongoose");

main().then(res=>{
    console.log("Connection Sucessfull!");
}).catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amozone");
}

// const bookSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     author:{
//         type:String,

//     },
//     price:{
//         type:Number,
//     }
// })
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,

    },
    price:{
        type:Number,
        min:[1,"Please Enter Valid Price!"],
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    }
});

let Book = mongoose.model("Book",bookSchema);

// let book2 =new Book({
//     title:"Marve",
//     author:"LET X",
//     price:873,
//     genre:['don','fake','sake'],
//     category:"fiction"
// });

// book2.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

Book.findByIdAndUpdate('67fe80be67716f7b0288d7fa',{price:-110},{runValidators:true}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});