const Employee=require('../Models/employee');
exports.getSingleEmp=async(req,res)=>{
    try{
        const emp=await Employee.findById(req.params.id);
        if(!emp){
            return res.status(404).json({
                success:false,
                message:"Employee not found"});
        }
        res.status(200).json({
            success:true,
            emp});
    }   
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error fetching employee",error});
    }
}