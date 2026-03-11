const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successfull")
})
.catch((err)=>{
    console.log("The error is due to the ",err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

let User = mongoose.model("User",userSchema);

// let user2 = User({
//     name:"Sameer Ahmad",
//     email:"sameer@peace.com",
//     age:20
// });
//  user2.save()
//         .then(res=>{
//             console.log(res);
//         })
//         .catch(err=>{
//             console.log(err);
//         })

//insert many

// User.insertMany([
//     {name:"Ibrahim",email:"ibrahim@gmail.com",age:49},
//     {name:"Ali",email:"ali@gmil.com",age:30},
//     {name:"Utthman",email:"utthman@gmail.com",age:20}
//     ])
//     .then(res=>{console.log(res)})
//     .catch(err=>{console.log(err)});


//FIND
// User.find({}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// User.findOne({age:{$gte:48}}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// User.findById("67fe630f8b90b7beeac40088").then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// User.updateOne({name:"Utthman"},{name:"Umar"}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// User.updateMany({age:{$gte:45}},{age:55}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })


// User.findOneAndUpdate({name:"Muhammad"},{name:"Ali"},{new:true}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// User.findByIdAndUpdate("67fe3bcc81ab54cf4cef74ab",{name:"Ahmad Sameer"},{new:true}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// User.deleteMany({name:"utthmam"});

User.findOneAndDelete({name:'Umar'}).then(res=>{
    console.log(res);
});

User.findByIdAndDelete('67fe3b7c4348a37449f67c57').then(res=>{
    console.log(res);
})