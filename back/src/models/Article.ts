import { Schema, model, Model } from 'mongoose';

const Article: Model<any> = model("article", new Schema(
    {
        title: String,
        content: String,
        date: { type: Date, default: Date.now }
    },
    { versionKey: "_somethingElse" }
));

export default Article;