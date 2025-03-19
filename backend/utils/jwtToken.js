const jsonwebtoken = require('jsonwebtoken');

const generateTokenandSetCookie = (userId,res) => {
    const token = jsonwebtoken.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    res.cookie('token', token, {
        httpOnly: true,  // to disable access from client side JavaScript
        maxAge: 15 * 24 * 60 * 60 * 1000,   // 15 days    
        sameSite: 'strict',       // cookie will only be sent in a first-party context
        secure: process.env.NODE_ENV !== 'development' ? true : false,  // cookie will only be sent if the connection is HTTPS 
    });
 
}

module.exports = generateTokenandSetCookie;