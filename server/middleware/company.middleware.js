const { verifyToken } = require("../utils/jwt");

const compAuth = (req, res, next) => {
  try {
    const companyToken = req.header("authorization");
    if (!companyToken) return res.status(401).send("Not Authorized");
    const token = companyToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("Not Authorized");
    req.company = payload;

    const companyId = payload.id;
    console.log("company ID:", companyId);

    next();
  } catch (err) {
    return res.status(401).send("Not Authorized");
  }
};

module.exports = { compAuth };
