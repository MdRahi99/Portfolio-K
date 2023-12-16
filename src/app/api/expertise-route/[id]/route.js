import Skill from "@/models/skills";
import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function DELETE(request, response) {
    try {
        await db();
        const id = response.params.id;

        if (!id) {
            return NextResponse.json({
                message: 'Skill ID is required for deletion.'
            }, {
                status: 400
            });
        }

        const deletedSkill = await Skill.findByIdAndDelete(id);

        if (!deletedSkill) {
            return NextResponse.json({
                message: 'Skill not found.'
            }, {
                status: 404
            });
        }

        return NextResponse.json({
            message: 'Skill deleted successfully.'
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