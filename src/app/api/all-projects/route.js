import db from '@/utils/db';
import { NextResponse } from 'next/server';
import Project from '@/models/project';

// Get Skills
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