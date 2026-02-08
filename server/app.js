const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");
const hireRoutes = require("./routes/hire.routes");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/hire", hireRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio API");
});


module.exports = app;
