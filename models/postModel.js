import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: "Anonymous" },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const postModel = mongoose.model("Post", Post);
