import express from "express";
import { postsController } from "../app/controllers/postsController.js";
const router = express.Router();

router.post("/create", postsController.createPost);
router.post("/update", postsController.updatePost);
router.get("/", postsController.index);

export default router;
