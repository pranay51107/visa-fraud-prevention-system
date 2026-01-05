const express = require("express");
const cors = require("cors");

const app = express();

// ✅ MIDDLEWARE
app.use(cors());              // ALLOWS FRONTEND REQUESTS
app.use(express.json());

// ✅ ROUTES
const consultantRoutes = require("./routes/consultantRoutes");
const documentRoutes = require("./routes/documentRoutes");

app.use("/api", consultantRoutes);
app.use("/api", documentRoutes);

// ✅ BASE URL (TEST)
app.get("/", (req, res) => {
  res.send("BASE URL WORKING");
});

// ✅ START SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(Server running on ${PORT});
});


