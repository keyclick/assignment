const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  long_description: String,
  attributes: String,
  price: Number,
  sale_price: Number,
  stock: Number,
  images: String,
  tax: Number,
});

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: String,
  images: String,
  description: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// Create the Category model
const Category = mongoose.model("Category", categorySchema);

module.exports = { Product, Category };

//HTTPS requests
app.post("/api/products", (req, res) => {
  const {
    name,
    description,
    long_description,
    attributes,
    price,
    sale_price,
    stock,
    images,
    tax,
    category,
  } = req.body;

  const product = new Product({
    name,
    description,
    long_description,
    attributes,
    price,
    sale_price,
    stock,
    images,
    tax,
    category,
  });

  const categoryData = new Category({
    name: category.name,
    images: category.images,
    description: category.description,
    productId: product._id,
  });

  product.save((error, savedProduct) => {
    if (error) {
      console.error("Error saving product:", error);
      res.status(500).json({ error: "Failed to save product" });
    } else {
      console.log("Product saved successfully:", savedProduct);

      categoryData.save((error, savedCategory) => {
        if (error) {
          console.error("Error saving category:", error);
          res.status(500).json({ error: "Failed to save category" });
        } else {
          console.log("Category saved successfully:", savedCategory);
          res
            .status(200)
            .json({ message: "Product and category saved successfully" });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
