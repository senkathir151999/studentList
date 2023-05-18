const router = require("express").Router();
const multer =require("multer");


const storage = multer.diskStorage({
destination:(req,file,callback)=>{
callback(null,"front-End/public/image")

},
filename:(req,file,callback)=>{
callback(null,file.originalname);
}
})

const upload = multer({ storage: storage });

let Product = require("../model/productlist");

router.route("/").get(async (req, res) => {
  console.log(req.query)
  let condition={}
  if(req.query.course){
    condition.course=req.query.course
  }
  if(req.query.city){
    condition.city=req.query.city
  }
     const product = await Product.find(condition);
     console.log(product)
      res.status(200).json({ product, count: product.length,status:200 });
});


router.route("/add").post(upload.single("image"),async (req, res) => {
  const excersies = { ...req.body, image: req.file.originalname };
 const photo = req.file.originalname;
  const user = await Product.create(excersies);
  res.status(200).json({ user,status:200 });
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json({ res: "product deleted successfully",status:200 }))
    .catch((err) => res.status(400).json("Error: " + err));
});



module.exports = router;
