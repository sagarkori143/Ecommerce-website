const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const {
            title,
            price,
            description,
            category,
            rating,
            numReviews
        } = req.body;

        const mainImageBuffer = req.file.buffer;
        const additionalImagesBuffers = req.files ? req.files.map(file => file.buffer) : [];

        const mainImageBase64 = mainImageBuffer.toString('base64');
        const additionalImagesBase64 = additionalImagesBuffers.map(buffer => buffer.toString('base64'));

        const newProduct = await Product.create({
            title,
            price,
            description,
            mainImage: mainImageBase64,
            additionalImages: additionalImagesBase64,
            category,
            rating,
            numReviews,
        });

        res.status(200).json({
            success: true,
            data: newProduct,
            message: 'Product created successfully.',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error',
        });
    }
};
