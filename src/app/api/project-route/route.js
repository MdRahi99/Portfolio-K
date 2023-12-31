import db from '@/utils/db';
import Project from '@/models/project';
import { NextResponse } from 'next/server';

// Get Project
export async function GET(req, res) {
    try {
        await db();
        const projects = await Project.find();

        return NextResponse.json({
            projects,
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

// Post Project
export async function POST(req, res) {
    try {
        const body = await req.json();
        await db();

        await Project.create(body);
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