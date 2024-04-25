const { formidable } = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;

class productController {
  add_product = async (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, field, files) => {
      let { name, category, description, stock, price, brand, discount } =
        field;
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
      } catch (error) {
        responseReturn(res, 500, {
          error: "Internal Server Error While Adding Product",
        });
      }
    });
  };
}

module.exports = new productController();
