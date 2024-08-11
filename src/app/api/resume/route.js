import Resume from '@/models/resume';
import db from '@/utils/db';
import { NextResponse } from 'next/server';

// Get resume
export async function GET(req, res) {
    try {
        await db();
        const resume = await Resume.find();

        return NextResponse.json({
            resume,
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

// Post resume
export async function POST(req, res) {
    try {
        const body = await req.json();
        await db();

        await Resume.create(body);
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