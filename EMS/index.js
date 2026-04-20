const express=require('express');
const app=express();
const cors=require('cors');
const {connectDB}=require('./Config/database');
const routes=require('./Routes/routes');
require("dotenv").config();

app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:3000",
        methods:["GET","POST","PUT","DELETE"],
    }
));
app.use("/api/v1",routes);
connectDB();
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});