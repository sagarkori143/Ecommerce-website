const Product=require("../models/Product");

exports.getAllProducts= async(req,res)=>{
    try{
        const products= await Product.find({});
        res.status(200).json({
            success:true,
            data: products,
            message:"Data fetched successfully and showing it."
        })

    }
    catch(err){
        console.log("Error in products fetching: ",err.message);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server error"
        })

    }
}

