

const mongoose =require('mongoose');
const {Schema,model} = mongoose;

const postSchema = new mongoose.Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: true,
});
module.exports=mongoose.model("Post",postSchema)