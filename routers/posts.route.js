import express from "express";
import { postsController } from "../app/controllers/postsController.js";
const router = express.Router();

router.post("/create", postsController.createPost);
router.delete("/delete", postsController.deletePost);
router.post("/update", postsController.updatePost);
router.get("/", postsController.getPost);

export default router;
