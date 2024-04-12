const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');

// Apply CORS middleware

// const corsOptions = {
//     origin: 'http://localhost:3000'
//   };
//   app.use(cors(corsOptions));
  

  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

const user = require("./routes/userRoutes");
const blog = require("./routes/blogRoutes");

app.use("/api/", user);
app.use("/api", blog);

module.exports = app;











// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors=require('cors');
// app.use(cors())

// // const corsOptions = {
// //     origin: 'http://localhost:5173/', 
// //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //     credentials: true,
// //   };

// // app.use(cors(corsOptions));


// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());


// const user = require("./routes/userRoutes");
// const blog=require("./routes/blogRoutes");

//  app.use("/api/", user);
//  app.use("/api", blog);

// module.exports = app;