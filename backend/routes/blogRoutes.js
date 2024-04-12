const express = require("express");
const router = express.Router();
// const {isAuthenticatedUser}=require('../middleware/auth');
const {
  addBlog,
  getSpecificBlog,
  getAllBlogs,
} = require("../controllers/blogController");

router.route("/add_blog").post(addBlog);
router.route("/get_all_blog").get(getAllBlogs);
router.route("/get_specific_blog").get(getSpecificBlog);

module.exports = router;
