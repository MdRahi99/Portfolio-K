import { tokenData } from "@/utils/tokenData";
import { NextResponse } from "next/server";
import User from "@/models/user";
import db from "@/utils/db";

export async function GET(req, res) {
    try {
        await db();
        const userId = await tokenData(req);

        if (!userId) {
            // Handle the case where tokenData does not return a valid user ID
            return NextResponse.json({
                error: "Invalid user token",
            }, { status: 401 });
        }

        const user = await User.findOne({ _id: userId }).select('-password');

        if (!user) {
            // Handle the case where the user is not found
            return NextResponse.json({
                error: "User not found",
            }, { status: 404 });
        }

        return NextResponse.json({
            message: 'User Found',
            data: user
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            error: error.message,
        }, { status: 400 });
    }
}
