import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide a UserName'],
    },
    email: {
        type: String,
        required: [true, 'Please Provide a Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
},
    {
        timestamp: true
    });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
