import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    //TODO: Get posts from db and send back
    // ORMCodeForAllPosts().then(posts => res.json(posts))

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data
        } catch (err) {
            res.json(err);
        }
    }
    const data = await fetchData();
    res.json(data);
});

router.post("/", async (req, res) => {
    //TODO: if photo: post to db and send back
    //TODO: Else: fetch placeholders, randomly select 1 URL, post to db and send back. 
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data
        } catch (err) {
            res.json(err);
        }
    }
    const data = await fetchData();
    res.json(data);
});


export const posts = router;
