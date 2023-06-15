import express from "express";

const app = express();

//create test route (get)
app.get("/", (req, res) => res.send("Post Service Connected!"))
//Iinitializing application on port 5001
app.listen(5001, () => console.log("Post Service Running..."));
