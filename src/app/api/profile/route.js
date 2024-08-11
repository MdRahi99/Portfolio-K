import Profile from '@/models/profile';
import db from '@/utils/db';
import { NextResponse } from 'next/server';

// Get profile
export async function GET(req, res) {
    try {
        await db();
        const profile = await Profile.find();

        return NextResponse.json({
            profile,
            message: 'Retrieved Successfully!'
        }, {
            status: 200
        });
    } catch (e) {
        return NextResponse.json({
            message: 'Server Error, Please Try Again!'
        }, {
            status: 500
        });
    }
}

// Post profile
export async function POST(req, res) {
    try {
        const body = await req.json();
        await db();

        await Profile.create(body);
        return NextResponse.json({
            message: 'Add Successfully!'
        },
            {
                status: 200
            })
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