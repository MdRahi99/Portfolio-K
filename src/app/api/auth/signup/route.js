import db from '@/utils/db';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
const bcrypt = require('bcrypt');

// Add User
export async function POST(req, res) {
    try {
        await db();
        const body = await req.json();
        const {name, email, password} = body;
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: 'User Already Exists!'}, {status: 400})
        };

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: 'User Created Successfully',
            success: true,
            savedUser
        });
    }
    catch (e) {
        return NextResponse.json({
            message: 'Server Error, Please Try Again!'
        },
            {
                status: 500
            })
    }
}