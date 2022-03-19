const express = require('express');
const app = express();
const pool = require("./db");
const RandomUser = require('./src/components/RandomUser');


app.use(express.json())

//Routes
app.get("/home/:id", async(req,res)=>{
    const{id}= req.params
try{
    const newusergen = await pool.query("SELECT * FROM users WHERE user_id = $1",[id]);
    res.json(newusergen.rows[0])
} catch(err){
    
    console.error(err.message);
}});


app.post("/random",async(req,res)=>{
try{
    
    const {username}= req.body;
    const newusergen = await pool.query(" INSERT INTO users (username) VALUES ($1) RETURNING *",
    [RandomUser(6)]
    );
    res.json(newusergen.rows[0])

}catch(err){
    console.error(err.message)
}
})

app.listen(3500,()=>{
    console.log("server is listening on port 3500")
});

module.exports = app