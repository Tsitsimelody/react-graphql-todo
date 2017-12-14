const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    text: { type: String },
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
