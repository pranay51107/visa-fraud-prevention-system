const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const consultantRoutes = require("./routes/consultantRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.use("/api", consultantRoutes);
app.use("/api", documentRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("BASE URL WORKING");
});

// Start server (Render compatible)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});

