const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    section: {
      type: String,
      enum: ["GL", "TI", "RSI", "DSI"],
      required: true,
    },
    notes: {
      mat1: { type: Number, required: true },
      mat2: { type: Number, required: true },
      mat3: { type: Number, required: true },
    },
    moyenne: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
