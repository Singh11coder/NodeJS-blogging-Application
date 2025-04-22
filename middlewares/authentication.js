const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
     const tokenCookieValue = req.cookies[cookieName];
     if (!tokenCookieValue) {
        return next();
     }

     try {
        const userPayload = validateToken(tokenCookieValue);
        req.user = userPayload;
        res.locals.user = userPayload;  // ✅ Now EJS can access `locals.user`
     } catch (error) {
        console.log("Invalid token:", error.message);
        res.clearCookie(cookieName); // Remove invalid tokens
     }
     return next();
  };
}

module.exports={
  checkForAuthenticationCookie,
}