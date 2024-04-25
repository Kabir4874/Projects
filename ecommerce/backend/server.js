const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./utils/db");
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
db.dbConnect();

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}!`);
});
