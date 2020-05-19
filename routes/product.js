const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories
} = require("../controller/product");


//all of params

router.param("productId", getProductById);

//all of actual routes
//create route
router.post(
  "/product/create",
  createProduct
);

router.get(
    "/product",
    getAllproduct
  );

// // read routes
router.get("/product/:productId", getProduct);


// //delete route
router.delete(
  "/product/:productId",
  deleteProduct
);

// //update route
// router.put(
//   "/product/:productId",
//   updateProduct
// );


// router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
