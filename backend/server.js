const express = require("express")
const app = express();
const port = 3000;
const mongoose = require("mongoose");   //importing mongoose
const User = require("./modals/User");  //importing the user schema
const jwt = require("jsonwebtoken");    //importing jsonwebtoken
const bcrypt = require("bcrypt");       //importing bcrypt
const cors = require("cors");           //importing cors
const authMiddleWare = require("./middlewares/autheticate"); //importing the middleware

//connecting to the mongo server using mongoose with error handling using try and catch
try
{
    mongoose.connect("mongodb://localhost:27017/UsersDB ");
    console.log("MongoDB connected")
}
catch (err)
{
    console.log("[ERROR] MongoDB connection failed");
}


app.use(cors());
app.use(express.json()) //you need to parse the json in the body else it won't be recieved.

app.post("/signup", async (req, res) => {
    const {username, password, email} = await req.body;
    //check if there is one with the username r not.
    const userSearched = await User.findOne({username:username});
    if (userSearched)
    {
        res.send({error:"User already exists"});
    }
    else 
    {

        const user = new User({username, password, email});
        await user.save();
        //now we'll create a jwt token and send it back to the client.
        const token = jwt.sign({id:user._id}, "myproject");
        res.send({token});
    }
});

//for login
app.post("/",async (req,res)=>{
    const {username,password} = await req.body;
    const user = await User.findOne({username:username}); //finding the user in the database
    if (!user || !password  || !await bcrypt.compare(password,user.password)) //if user doesn't exist or password doesn't match
    {
        res.send({error:"Invalid username or password"})
    }
    else
    {
        const token = jwt.sign({id:user._id},"myproject");
        res.send({token})
    }

})

app.get("/chat",authMiddleWare,(req,res)=>{
    res.status(200).send("You are authenticated");  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});