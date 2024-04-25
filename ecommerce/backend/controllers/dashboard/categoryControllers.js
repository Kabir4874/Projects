const categoryModel = require("../../models/categoryModel");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const { formidable } = require("formidable");

class categoryController {
  add_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        responseReturn(res, 404, { error: "Something error" });
      } else {
        let { name } = fields;
        let { image } = files;
        name = name[0].trim();
        const slug = name.split(" ").join("-");
        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.API_KEY,
          api_secret: process.env.API_SECRET,
          secure: true,
        });
        try {
          const result = await cloudinary.uploader.upload(image[0].filepath, {
            folder: "category",
            resource_type: "auto",
          });
          if (result) {
            const category = await categoryModel.create({
              name,
              slug,
              image: result.url,
            });
            responseReturn(res, 201, {
              category,
              message: "Category Added Successfully",
            });
          } else {
            responseReturn(res, 404, { error: "Image Upload Failed" });
          }
        } catch (error) {
          responseReturn(res, 500, { error: "Internal Server Error" });
        }
      }
    });
  };

  get_category = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);
    try {
      if (searchValue && page && perPage) {
        const category = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalCategory = await categoryModel
          .find({
            $text: { $search: searchValue },
          })
          .countDocuments();
        responseReturn(res, 200, { totalCategory, category });
      } else if (searchValue==='' && page && perPage) {
        const category = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel.find({}).countDocuments();
        responseReturn(res, 200, { totalCategory, category });
      } else {
        const category = await categoryModel
          .find({})
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });

        const totalCategory = await categoryModel.find({}).countDocuments();
        responseReturn(res, 200, { totalCategory, category });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };
}

module.exports = new categoryController();
