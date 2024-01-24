const mongoose = require("mongoose");

const userData= mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        maxlength: 50,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    listedProducts: [
        {
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        },
    ],
    totalSales:{
        type:Number,
        required:true
    }
});
