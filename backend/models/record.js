import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({  
    img: String
}); 

export const Record = mongoose.model("Record", imageSchema);
