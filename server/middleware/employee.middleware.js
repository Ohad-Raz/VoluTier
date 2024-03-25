const { verifyToken } = require("../utils/jwt");

const empAuth = (req, res, next) => {
  try {
    const employeeToken = req.header("authorization");
    if (!employeeToken) return res.status(401).send("Not Authorized");
    const token = employeeToken.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) return res.status(401).send("Not Authorized");
    req.employee = payload;

    const employeeId = payload.id;
    console.log("Employee ID:", employeeId);

    next();
  } catch (err) {
    return res.status(401).send("Not Authorized");
  }
};

module.exports = { empAuth };
