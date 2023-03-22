import mongoose from "mongoose"

const SchemaMongoose = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    status: Boolean,
    quantity: Number
});
export default mongoose.model("assigments", SchemaMongoose);