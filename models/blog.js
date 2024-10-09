import mongoose from 'mongoose';
const { Schema } = mongoose;
const blogSchema = new Schema(
    {
    title:{
        type:String,
        require : true
    },

    
    body:String},
    {timestamps:true}
    );
    const  Article = mongoose.model("Article",blogSchema)
    export default Article