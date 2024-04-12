const Blog = require("../models/blogModel");
const User = require("../models/userModel");



module.exports.addBlog = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    const user = await User.findById(authorId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create the blog post
    const blog = await Blog.create({
      title,
      content,
      authorId,
    });

    return res
      .status(200)
      .json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.getSpecificBlog = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blogPresent = await Blog.findById(id);
    if (!blogPresent) {
      return res.status(404).json({
        success: false,
        message: "Not Available",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Found blog",
      blogPresent,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// module.exports.getAllBlogs = async (req, res, next) => {
//   try {
//     const allPresentBlogs = await Blog.find();
//     if (!allPresentBlogs) {
//       return res.status(404).json({
//         success: false,
//         message: "Not Available",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Found blog",
//       allPresentBlogs,
//     });
//   } catch (e) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };



module.exports.getAllBlogs = async (req, res, next) => {
    try {
     
      const { title } = req.query;
  
      let query = {}; 
  
     
      if (title) {
        query.title = { $regex: title, $options: 'i' }; 
      }
  
     
      const allPresentBlogs = await Blog.find(query);
  
      if (!allPresentBlogs || allPresentBlogs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No blogs found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: title ? "Found blogs matching search criteria" : "All blogs",
        allPresentBlogs,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
  

