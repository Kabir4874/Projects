const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser= require('cookie-parser')
const db= require('./utils/db')
const port = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("Hello World"));
db.dbConnect()
app.listen(port, () => console.log(`server is running on port ${port}!`));
