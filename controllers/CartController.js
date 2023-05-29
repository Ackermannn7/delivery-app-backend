// import CartModel from "../models/Cart.js";
// import ProductModel from "../models/Product.js";

// const populate = {
//   path: "cartDetails",
//   populate: {
//     path: "_product",
//     model: "Product",
//     populate: { path: "_shop", model: "Shop" },
//   },
// };
// export const getCart = async (req, res) => {
//   try {
//     const cart = await CartModel.findOne({
//       _userId: req.userId,
//     }).exec();
//     const product = await ProductModel.findById(req.body._id).exec();
//     const cartDetails = {
//       _product: req.body._productId,
//       quantity: req.body._quantity,
//       price: product.price,
//       amount: product.price * req.body.quantity,
//     };
//     if (cart) {
//       CartModel.findOneAndUpdate(
//         {
//           _userId: req.userId,
//           "cartDetails._product": req.body._productId,
//         },
//         {
//           $inc: {
//             "cartDetails.$.quantity": req.body.quantity,
//             "cartDetails.$.amount": product.price * req.body.quantity,
//           },
//         },
//         {
//           new: true,
//         }
//       ).populate(populate);
//     }
//     res.json(posts);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Can't get articles!",
//     });
//   }
// };

// export const getOne = async (req, res) => {
//   try {
//     const postId = req.params.id;

//     const post = await PostModel.findOneAndUpdate(
//       {
//         _id: postId,
//       },
//       {
//         $inc: { viewsCount: 1 },
//       },
//       {
//         returnDocument: "after",
//       }
//     ).populate("user");
//     res.json(post);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: "Can't get article!",
//     });
//   }
// };

// export const remove = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     await PostModel.findOneAndDelete({
//       _id: postId,
//     });
//     res.json({
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: "Can't get article!",
//     });
//   }
// };

// export const create = async (req, res) => {
//   try {
//     const doc = new PostModel({
//       title: req.body.title,
//       text: req.body.text,
//       tags: req.body.tags.split(","),
//       imageUrl: req.body.imageUrl,
//       user: req.userId,
//     });

//     const post = await doc.save();
//     res.json(post);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Can't create article!",
//     });
//   }
// };

// export const update = async (req, res) => {
//   try {
//     const postId = req.params.id;

//     await PostModel.updateOne(
//       {
//         _id: postId,
//       },
//       {
//         title: req.body.title,
//         text: req.body.text,
//         tags: req.body.tags.split(","),
//         imageUrl: req.body.imageUrl,
//         user: req.userId,
//       }
//     );
//     res.json({
//       success: true,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Can't update article!",
//     });
//   }
// };
