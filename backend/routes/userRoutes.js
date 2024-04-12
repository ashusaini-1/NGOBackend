const express=require("express");
const router=express.Router();
// const {isAuthenticatedUser}=require('../middleware/auth');
const {registerUser, loginUser,getUserDetails,logout, allUser}=require("../controllers/userController")
router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logout);

router.route("/me").get(getUserDetails);



module.exports=router;