const express = require("express");
const app = express();
const auth = require("./Routes/auth");
port = 3001;
// Get : to get clientInformation
// Post : INSERT
// PUT : UPDATE
// DELETE: delete an entity
app.get("/", (req, res) => {
  res.json({ message: "ok from the server side" });
});
app.use("/api/auth/", auth);
app.listen(port, () => {
  console.log(`my app is running on the port ${port}`);
});
