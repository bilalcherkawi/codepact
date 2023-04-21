const express = require("express");
const { register, login } = require("../services/auth");
const router = express.Router();
router.get("/login", (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).json("Bad request");
  }
  const result = login(req.query.email);
  if(result.status==200){
    res.status(result.status).json(result.message);
  }
});
router.post("/register", (req, res) => {
  res.status(200).json(register(req.query));
  //console.log(email, fn, ln, dob);
});
module.exports = router;
