const Product = require("../models/Product");

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            success: true,
            data: updatedProduct,
            message: "Data updated successfully"
        });
    } catch (err) {
        console.log("Error in updating product: ", err.message);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error"
        });
    }
};
