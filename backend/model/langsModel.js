const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LangSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    langname: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("lang", LangSchema);
