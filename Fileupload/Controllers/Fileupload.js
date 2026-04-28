const FILE=require("../Model/file")
const cloudinary=require("cloudinary").v2
// supported file types
const isSupported=(supportedTypes,file)=>{
    return supportedTypes.includes(file)
}
const uploadToCloudinary=async(folder,file,quality)=>{
    const options={
        folder:folder}
        options.resource_type="auto"
    if(quality){
        options.quality=quality
    }
    const res=await cloudinary.uploader.upload(file.tempFilePath,options)
    return res

}

exports.uploadImage=async(req,res)=>{
    try{
        // get data form req body
        const {name,email}=req.body

        // get file from req file
        const file=req.files.myfile

      const  supportedTypes=["jpeg","jpg","png"]
      const type=file.name.split(".").slice(-1)[0].toLowerCase()
      console.log(type)
      const check=isSupported(supportedTypes,type)
        if(!check){
            return res.status(400).json({
                success:false,
                message:"File type not supported"
            })
        }
        // upload file to cloudinary
        const response=await uploadToCloudinary("batch10am",file)
        console.log("res",response)
        //  create document
        const filedata=await FILE.create({
            name,email,file:response.secure_url
        })
        res.status(200).json({
            success:true,
            message:"File uploaded successfully",
            data:filedata
        })
     



    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error in uploading file",
            error:err.message+"error"+err
        })

    }
}