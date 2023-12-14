// tokenData.js
import jwt from 'jsonwebtoken';

export const tokenData = (request) => {
    try {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return null;
        }

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
};
