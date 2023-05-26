import ShopModel from "../models/Shop.js";

export const getAllShops = async (req, res) => {
  try {
    const shops = await ShopModel.find().exec();
    res.json(shops);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Can`t get shops!",
    });
  }
};

// export const getProductsByShop = (req, res)=>{
//     try {
//         const shopId = req.
//         const products = await ProductModel.find().exec()
//     } catch (err) {

//     }
// }

export const getOne = async (req, res) => {
  try {
    const shopId = req.params.id;

    const shop = await ShopModel.findOneAndUpdate(
      {
        _id: shopId,
      },
      {},
      {
        returnDocument: "after",
      }
    );
    res.json(shop);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't get shop!",
    });
  }
};

export const createShop = async (req, res) => {
  try {
    const doc = new ShopModel({
      shopName: req.body.shopName,
    });

    const shop = await doc.save();
    res.json(shop);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Can't create shop!",
    });
  }
};
