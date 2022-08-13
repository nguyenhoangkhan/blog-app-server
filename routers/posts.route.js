import express from "express";
import { postsController } from "../app/controllers/postsController.js";
const router = express.Router();

router.get("/", postsController.getPost);
router.post("/create", postsController.createPost);
router.post("/update", postsController.updatePost);

export default router;
