import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},
    {
        timestamp: true
    });

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

export default Skill;
