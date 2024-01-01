const mongoose = require("mongoose");
const toySchema = mongoose.Schema({
name: String,
numplayers: Number,
price: Number
})
const toyModel = mongoose.model("myToies", toySchema);
module.exports =toyModel; 