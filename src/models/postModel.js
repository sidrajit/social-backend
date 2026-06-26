import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema(
    {
        image: {
            type: String
        },
        caption: {
            type: String
        },
        uploadBy: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, {
    timestamps: true
}
);

const Post = mongoose.model("Post", postSchema);

export default Post;