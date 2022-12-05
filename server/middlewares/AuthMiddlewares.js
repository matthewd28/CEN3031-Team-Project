const { verify } = require("jsonwebtoken");

//Verifies the existence of a user's authentication token
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in" });

  try {
    const validToken = verify(accessToken, "charitablesAuth");
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
