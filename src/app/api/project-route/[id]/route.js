import Project from "@/models/project";
import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(request, response) {
    try {
        await db();
        const id = response.params.id;

        if (!id) {
            return NextResponse.json({
                message: 'Project ID is required for deletion.'
            }, {
                status: 400
            });
        }

        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return NextResponse.json({
                message: 'Project not found.'
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            message: 'Project deleted successfully.'
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