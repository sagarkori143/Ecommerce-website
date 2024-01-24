const express = require("express");
const app= express();
const routes=require("./routes/routes");
const dbConnect=require("./config/database")

require("dotenv").config();
const PORT=process.env.PORT;
// middleware
app.use(express.json());

//mounting route
app.use("/api/v1",routes);

app.listen(PORT,()=>{
    console.log("App runnig successfully")
})

app.get("/",(req,res)=>{
    res.send("Bhai ye kaha aagye aap")
})
dbConnect();




