import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout Successful',
            success: true
        });
        response.cookies.delete('token');
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
            // domain: 'https://khadija-tut-tahera.vercel.app'
        });
        return response;
    }
    catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 })
    }
};