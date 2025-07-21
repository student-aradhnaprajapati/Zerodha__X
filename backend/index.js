require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  credentials: true
}));
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

// Connect DB and start server
mongoose.connect(uri)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to DB", err);
  });
