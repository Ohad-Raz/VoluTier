const { verifyToken } = require("../utils/jwt");

const businessAuth = (req, res, next) => {
  try {
    const businessToken = req.header("authorization");
    if (!businessToken) return res.status(401).send("Not Authorized");
    const token = businessToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("Not Authorized");
    req.business = payload;

    const businessId = payload.id;
    console.log("Business ID:", businessId);

    next();
  } catch (err) {
    return res.status(401).send("Not Authorized");
  }
};

module.exports = { businessAuth };
