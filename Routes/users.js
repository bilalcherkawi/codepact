const express = require("express");
const { getAllUsers, deleteUser } = require("../services/users");
//const { register, login, authenticate } = require("../services/auth");
const router = express.Router();

router.get("/getAllUsers", async (req, res) => {
  const result = await getAllUsers();
  //console.log(result);

  console.log(result);
  if (result) {
    res.status(200).json(result);
  }
  //inappropriate request
  res.status(500).json("error retrieving user");
});
router.post("/deletetUser", async (req, res) => {
  const { id } = req.body;
  deleteUser(id);
});

module.exports = router;
