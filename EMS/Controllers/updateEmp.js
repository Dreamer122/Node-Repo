const Employee=require('../Models/employee');
exports.updateEmp=async(req,res)=>{
try{
    const id=req.params.id;
    const {name,email,phone,department,position,salary,dateOfJoining}=req.body;

    const emp=await Employee.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        department,
        position,
        salary,
        dateOfJoining
     },{new:true })

     return res.status(200).json({
        success:true,
        message:"Employee updated successfully",
        data:emp});


}catch(error){
    res.status(500).json({
        success:false,
        message:"Error updating employee",error});
}
}