import express from "express";
import axios from "axios";

const router = express.Router();


router.post("/", async (req, res) => {

    res.send("Posting Post");
});


export const posts = router;
