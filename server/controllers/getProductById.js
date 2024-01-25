const Product= require("../models/Product")

exports.getProductById= async(req,res)=>{
    try{
        const id= req.params.id;
        const product= await Product.findById({_id:id});
        if(!product){
            res.status(404).json({
                success:false,
                message:"Data not found for the given Id :( "

            })
        }
        else{
            res.status(200).json({
                success:true,
                data:product,
                message:"Data entry found :) "
            })
        }
    }
    catch(err){
        console.log("Error in fetching product: ",err.message);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server error"
        })

    }
}