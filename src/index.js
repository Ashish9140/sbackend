const express = require("express");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const siteRouter = require("./routes/site")
const cors = require("cors");
require("./db/mongoose");
const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);
app.use(siteRouter);

app.listen(PORT, () => {
  console.log("Server setup at 3000: " + PORT);
});
