import mongoose from "mongoose";

const SpecialtySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please provide the name"],
  },
});

export default mongoose.model("Specialty", SpecialtySchema);
