import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  link: { type: String }
}, { timestamps: true });

const Webinar = mongoose.model("Webinar", webinarSchema);

export default Webinar;
