const { formidable } = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../models/productModel");
class productController {
  add_product = async (req, res) => {
    const { id } = req;
    const form = formidable({ multiples: true });
    form.parse(req, async (err, field, files) => {
      let {
        name,
        category,
        description,
        stock,
        price,
        brand,
        discount,
        shopName,
      } = field;
      const { images } = files;
      const productName = name[0].trim();
      const slug = productName.split(" ").join("-");
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
      });
      try {
        let allImageUrl = [];
        for (let i = 0; i < images.length; i++) {
          const result = await cloudinary.uploader.upload(images[i].filepath, {
            folder: "products",
            resource_type: "auto",
            quality: 30,
          });
          allImageUrl = [...allImageUrl, result.url];
        }
        const product = await productModel.create({
          sellerId: id,
          name: productName,
          slug,
          shopName: shopName[0].trim(),
          category: category[0].trim(),
          description: description[0].trim(),
          stock: parseInt(stock[0]),
          price: parseInt(price[0]),
          discount: parseInt(discount[0]),
          images: allImageUrl,
          brand: brand[0].trim(),
        });
        responseReturn(res, 201, { message: "Product Added Successfully" });
      } catch (error) {
        responseReturn(res, 500, {
          error: error.message,
        });
      }
    });
  };

  product_get = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const { id } = req;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);
    try {
      
    } catch (error) {
      responseReturn(res, 500, {
          error: error.message,
        });
    }
  };
}

module.exports = new productController();
