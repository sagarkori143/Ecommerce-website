const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const Product = require("../models/Product");
const { createProduct } = require("../controllers/addProduct");
const { deleteProductById } = require("../controllers/deleteProduct");
const { getProductById } = require("../controllers/getProductById");
const { updateProduct } = require("../controllers/updateProduct");
const { getAllProducts } = require("../controllers/getAllProducts");

router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.delete("/deleteProductById/:id", deleteProductById);
router.put("/updateProduct/:id", updateProduct);
router.post('/addProduct', upload.single('mainImage'), upload.array('additionalImages', 4), createProduct);

module.exports = router;
