const express=require('express');
const router=express.Router();
const {getSingleEmp}=require('../Controllers/getSingleEmp');
const {getAllEmp}=require('../Controllers/getAll');
const {createEmp}=require('../Controllers/CreateEmp');
const {updateEmp}=require('../Controllers/updateEmp');
const {deleteEmp}=require('../Controllers/deleteemp');

router.get("/employees/:id",getSingleEmp);
router.get("/employees",getAllEmp);
router.post("/createemployee",createEmp);
router.put("/updateemployee/:id",updateEmp);
router.delete("/deleteemployee/:id",deleteEmp);
module.exports=router;