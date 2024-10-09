
import mongoose from "mongoose"
import express from "express";
import Article from "./models/blog.js"
import dotenv from 'dotenv';
dotenv.config();

const app=express()
app.use(express.json())

app.get('/name', function (req, res) {
   res.send('Mada');
})

app.get('/age', function (req, res) {
   res.send('1993');
})

// const users =[ {
//    id:"1",
//   fName: "Mada",
//   title:"flower",
//   blog:"flowers are beautiful"
// },
// {
//    id:"2",
//    fName: "Rana",
//    title:"rock",
//    blog:"rocks are hard"
// },
// ];


// app.get('/users', (req, res) => {
//   const id = req.params.id;
//   // Get the user data from database
  
//   // Send the response to the client
//   res.send({
//     user: ,
//   });
// });


// app.post('/users', (req, res) => {
//    // Get complete list of users
//    const userName=req.body.userName
//    const title=req.body.title
//    // Send the usersList as a response to the client
//    res.send(usersList);
//  });
// let usersList =[]
// app.get('/users', (req, res) => {
//    // Get complete list of users
//     res.json(usersList);
 
//    // Send the usersList as a response to the client
//    // res.send(usersList);
//  });
// app.post('/users', (req, res) => {

// console.log(req.body);

// const { fName, title, blog } = req.body;

// const newUser = { id: usersList.length + 1, fName, title, blog  };

// usersList.push(newUser);

// res.json(newUser);

// });



main().catch(err => console.log(err));

async function main() { 
  await mongoose.connect(process.env.MONGO_URL);
console.log("----------------////////////")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 
app.get("/artical",(req,res)=>{
   const articals = new Article({
       title:"hello",
       body:"this is my body"
   })
   articals.save()
   .then((result)=>{
       res.send(result)
   })
   
   })
   app.post("/addArtical",(req,res)=>{
      const articals = new Article({
          title:req.body.title,
          body:req.body.body
      })
      articals.save()
      .then((result)=>{
          res.send(result)
      })
      
      })
   app.get("/addArtical",(req,res)=>{
     Article.find().then(result=>{
      res.send(result)
     })
   })

   app.patch("/addArtical/:id",(req,res)=>{
      const {id}=req.params
      Article.findByIdAndUpdate(id,req.body,{new:true,runValidators:true}).then(result=>{
         res.send(result)
     })
   })
   app.get("/addArtical/:id",(req,res)=>{
      const {id}=req.params
      Article.findByIdAndUpdate(id).then(result=>{
         res.send(result)
     })
   })

   app.delete("/addArtical/:id",(req,res)=>{
      const {id}=req.params
      Article.findByIdAndDelete(id).then(result=>{
         res.send(result)
     })
   })
// mongodb+srv://madaawadh1:<db_password>@project.vrsw4.mongodb.net/

// mongodb+srv://madaawadh1:<db_password>@project.vrsw4.mongodb.net/
//  app.put("/users", (req, res) => {
//    console.log(req.body);
//    res.send("Data Recieved Successfully!");
// })

// app.put('/users/:id', (req, res) => {
//    const user = users.find(u => u.id === parseInt(req.params.id));
//    if (!user) {
//      return res.status(404).send('blog not found');
//    }
 
//    const { reem, lovley } = user;
//    user.title = reem || user.title;
//    user.author = lovley || user.author;
 
//    res.send(user);
//  });
app.listen(38080, function () {
   console.log("Express App running at mongod");
})