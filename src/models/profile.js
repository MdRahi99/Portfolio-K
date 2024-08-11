import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);

export default Profile;
