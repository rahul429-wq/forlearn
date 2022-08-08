require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const postsRoutes = require("./routes/posts");
const langsRoutes = require("./routes/langs");
const animsRoutes = require("./routes/anims");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/posts", postsRoutes);
app.use("/api/langs", langsRoutes);
app.use("/api/anims", animsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
