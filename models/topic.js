import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    nama: String,
    nim: String,
    email: String,
    alamat: String,
    nohp: String,
    judul: String,
    jurusan: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
