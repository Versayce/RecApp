import express from "express";
import posts from "./routes/posts";

const app = express();

//create test route (get)
app.get("/api", (req, res) => res.send("Post Service Connected!"))

app.use("/api/posts", posts)

//Iinitializing application on port 5001
app.listen(5001, () => console.log("Post Service Running..."));
