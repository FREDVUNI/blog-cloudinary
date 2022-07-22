const express = require("express")
const path = require("path")
const router = express.Router()
const {HomeController,PostController,SinglePostController} = require("../controllers")
const blog = require("../models")
const multer = require("multer")
const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET 
})

router.get("/",HomeController)
router.get("/create",PostController)
router.get("/:id",SinglePostController)

const storage = multer.diskStorage({})
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
})

router.post("/create",upload.single("coverImage"),async(req,res)=>{
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    const posts = await new blog({ 
        title:req.body.title,
        description:req.body.description,
        image: result.url
    })
    await posts.save()
    res.redirect("/")
})

module.exports = router