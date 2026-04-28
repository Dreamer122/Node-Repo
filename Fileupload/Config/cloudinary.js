const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();
exports.cloudinaryconnect=()=>{
    cloudinary.config({ 
  cloud_name: process.env.CLOUDNAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET_KEY
});
}