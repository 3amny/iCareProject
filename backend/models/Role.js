import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please provide the name"],
  },
});

export default mongoose.model("Role", RoleSchema);
