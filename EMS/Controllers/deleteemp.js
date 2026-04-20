const Employee=require('../Models/employee');

exports.deleteEmp=async(req,res)=>{
try{
    const id=req.params.id;
    const emp=await Employee.findByIdAndDelete(id);
    return res.status(200).json({
        success:true,
        message:"Employee deleted successfully",
        });

}
catch(error){
    res.status(500).json({
        success:false,
        message:"Error deleting employee",error});
}
}