const categoryModel = require("../../models/categoryModel");
const { formidable } = require("formidable");
class categoryControllers {
  add_category = async (req, res) => {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
      let { name } = fields;
      let { image } = files;
    });
  };
  get_category = async (req, res) => {
    console.log("Hello get category");
  };
}

module.exports = new categoryControllers(); 
