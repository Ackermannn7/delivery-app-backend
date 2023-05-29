import ProductModel from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    console.log(req.query);
    const products = req.query.shop
      ? await ProductModel.find({ shop: req.query.shop }).exec()
      : await ProductModel.find().exec();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Can`t get products!",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await ProductModel.findOneAndUpdate(
      {
        _id: productId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't get product!",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const doc = new ProductModel({
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      shop: req.body.shop,
    });

    const product = await doc.save();
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Can't create product!",
    });
  }
};
