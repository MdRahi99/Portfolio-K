import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout Successful',
            success: true
        });

        // Set the same path used when creating the cookie
        const domain = req.headers.get('host');
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
            path: '/',
            domain: domain, 
        };

        response.cookies.set("token", "", cookieOptions);
        return response;
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
