import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
});

const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);

export default Resume;
