const Employee=require('../Models/employee');
exports.createEmp=async(req,res)=>{
try{
    const {name,email,phone,department,position,salary,dateOfJoining}=req.body;
     const isexists=await Employee.findOne({email:email});
     if(isexists){
        return res.status(400).json({message:"Employee with this email already exists"});
     }
     const emp=await Employee.create({
        name,
        email,
        phone,
        department,
        position,
        salary,
        dateOfJoining
     })
        res.status(201).json({
            success:true,
            message:"Employee created successfully",emp});
}
catch(error){
    res.status(500).json({
        success:false,
        message:"Error creating employee",error});
}
}