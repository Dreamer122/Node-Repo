const Employee=require('../Models/employee');
exports.getAllEmp=async(req,res)=>{
    try{
        const emp=await Employee.find();
       
        res.status(200).json({
            success:true,
            message:"Employees fetched successfully",
            emp});
    }   
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error fetching employees",error});
    }
}