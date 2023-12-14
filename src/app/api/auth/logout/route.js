import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout Successful',
            success: true
        });
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: true
        });
        return response;
    }
    catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 })
    }
};