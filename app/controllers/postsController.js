import { postModel } from "../../models/postModel.js";

class PostsController {
  async getPosts(req, res) {
    try {
      const posts = await postModel.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ err });
    }
  }
  async createPost(req, res) {
    try {
      const dataPost = req.body;
      const post = new postModel(dataPost);
      await post.save();
      res.status(200).json(post);
    } catch {
      res.status(500).json({ err });
    }
  }
  async updatePost(req, res) {
    try {
      const updatedPost = req.body;
      const idUpdatePost = req.body._id;
      const post = await postModel.findOneAndUpdate(
        { _id: idUpdatePost },
        updatedPost,
        { new: true }
      );
      await post.save();
      res.status(200).json(post);
    } catch {
      res.status(500).json({ err });
    }
  }
}
export const postsController = new PostsController();
