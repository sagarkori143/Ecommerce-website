const Product = require("../models/Product");
const Assets = require("../models/Assets");

exports.createProduct = async (req, res) => {
  try {
    const { title, price, description, category, rating, numReviews } = req.body;

    // Check if a product with the same title already exists 
    const existingProduct = await Product.findOne({ title });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        error: "Product with the same title already exists",
        message: "Product not created",
      });
    }

    let mainImageDocument;
    if (req.file) {
      // Save main image to the "assets" collection
      const mainImageBuffer = req.file.buffer;
      mainImageDocument = await Asset.create({
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: mainImageBuffer,
      });
    }

    let additionalImageDocuments = [];
    if (req.files && req.files.length > 0) {
      // Save additional images to the "assets" collection
      const additionalImagesBuffers = req.files.map((file) => file.buffer);
      additionalImageDocuments = await Promise.all(
        additionalImagesBuffers.map(async (buffer, index) => {
          return await Assets.create({
            filename: req.files[index].originalname,
            contentType: req.files[index].mimetype,
            data: buffer,
          });
        })
      );
    }

    // Create a new product with references to the "assets" collection documents
    const newProduct = await Product.create({
      title,
      price,
      description,
      mainImage: mainImageDocument ? mainImageDocument._id : undefined,
      additionalImages: additionalImageDocuments.map((doc) => doc._id),
      category,
      rating,
      numReviews,
    });

    res.status(200).json({
      success: true,
      data: newProduct,
      message: "Product created successfully.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
