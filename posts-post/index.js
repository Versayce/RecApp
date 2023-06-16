import express from "express";
import { posts } from "./routes/posts.js";

const app = express();

//create test route (get)
app.get("/api", (req, res) => res.send("Post Service Connected!"))

app.use("/api/posts", posts)

//Iinitializing application on port 5001
app.listen(5002, () => console.log("Post Service Running..."));
