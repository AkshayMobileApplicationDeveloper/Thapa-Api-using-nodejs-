const express = require("express");

const app = express();

const PORT = process.env.PORT || 8880;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// Set routes
app.use("/api/products", products_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes, I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start server
start();
