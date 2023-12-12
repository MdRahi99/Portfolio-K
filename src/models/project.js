import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Case Study', 'Web', 'App'],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    project_url: {
        type: String,
        required: true,
    },
},
    {
        timestamp: true
    });

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
