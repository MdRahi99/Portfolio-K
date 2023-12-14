import db from '@/utils/db';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
const bcrypt = require('bcrypt');

// Add User
export async function POST(req, res) {
    try {
        await db();
        const body = await req.json();
        const {email, password} = body;
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: 'User Does Not Exists!'}, {status: 400})
        };

        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: 'Invalid Password!'}, {status: 400})
        };

        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: '1d'})

        const response = NextResponse.json({
            message: 'Login Successful',
            success: true
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: true,
            domain: 'khadija-tut-tahera.vercel.app'
        });

        return response;
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({
            message: 'Server Error, Please Try Again!'
        },
            {
                status: 500
            })
    }
}