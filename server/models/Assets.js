// asset.model.js
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

const Assets = mongoose.model("Assets", assetSchema);

module.exports = Assets;
