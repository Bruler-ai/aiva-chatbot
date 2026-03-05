import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/chat", async (req,res)=>{

let message = req.body.message;

let reply = "Hello, I am Aiva. You said: " + message;

res.json({reply});

});

app.listen(3000, ()=>{
console.log("Aiva running");
});
