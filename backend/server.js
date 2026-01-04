const express = require("express");

const app = express();
app.use(express.json());

// ROUTES
const consultantRoutes = require("./routes/consultantRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.use("/api", consultantRoutes);
app.use("/api", documentRoutes);

// BASE URL
app.get("/", (req, res) => {
  res.send("BASE URL WORKING");
});

app.listen(5000, () => {
  console.log("SERVER RUNNING ON 5000");
});

