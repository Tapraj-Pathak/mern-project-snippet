const { Schema, model } = require("mongoose");

const somethingSchema = new Schema({

}, { timestamps: true });

module.exports = model("Something", somethingSchema);
