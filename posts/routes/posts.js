import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
    //TODO: Get posts from db and send back
    // ORMCodeForAllPosts().then(posts => res.json(posts))

    (async () => {
        try {
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
        } catch (err) {
            res.json(err);
        }
    })

});

router.post("/", (req, res) = {
    //TODO: if photo: post to db and send back
    //TODO: Else: fetch placeholders, randomly select 1 URL, post to db and send back. 

})


export const posts = router;
