import productmodel from '../database/itemschema/productschema.js';
//adding individual product by admin
const addproduct = async (req, res) => {
  try {
    // if (!req.isAdmin) {
    //   return res.status(401).send({
    //     message: 'You do not have permission to add products',
    //     success: false,
    //   });
    // }
    const {
      name,
      slug,
      desc,
      price,
      stock,
      category,
      star,
      numberOfReviews,
      img,
    } = req.body;

    // const { filename } = req.file;
    const checkItemExist = await productmodel.findOne({ name });
    if (checkItemExist) {
      return res.status(400).send({
        message: 'Product already exists',
        success: false,
      });
    }
    const result = await new productmodel({
      img,
      name,
      desc,
      price,
      stock,
      category,
      star,
      numberOfReviews,
      slug,
    }).save();

    return res.status(201).send({
      message: 'Product created successfully',
      success: true,
      result,
    });
  } catch (er) {
    console.log(er);
  }
};
//fetching all the products by using slug
const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    console.log(slug);
    const result = await productmodel.findOne({ slug });
    console.log(result);
    return res.status(200).send({
      message: 'products successfully fetched',
      success: true,
      result,
    });
  } catch (er) {
    console.log(er);
  }
};

//fetching all the products by using product id

const getProductById = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await productmodel.findById({ id });
    return res.status(200).send({
      message: 'products successfully fetched',
      success: true,
      result,
    });
  } catch (er) {}
};

//fetching all the prducts

const getAllProducts = async (req, res) => {
  try {
    const result = await productmodel.find();
    return res.status(200).send({
      message: 'products successfully fetched',
      success: true,
      result,
    });
  } catch (er) {
    console.log(er);
  }
};

export { addproduct, getProductBySlug, getProductById, getAllProducts };
// {
//     img: '/best3.png',
//     subtitle: 'Water Softeners and filters',
//     title: '3M Appliance Protection System IAS430SS',
//     price: 11999.0,
//     reviews: 10,
//     stars: 3.5,
//     category: 'water-softeners and filters',
//     slug: 'water softerners and filters ',
//     stock: 2,
//   },
