import db from '@/utils/db';
import { NextResponse } from 'next/server';
import Skill from '@/models/skills';

// Get Skills
export async function GET(req, res) {
    try {
        await db();
        const skills = await Skill.find();

        return NextResponse.json({
            skills,
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

// Post Skills
export async function POST(req, res) {
    try {
        const body = await req.json();
        await db();

        await Skill.create(body);
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