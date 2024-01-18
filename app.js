if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  const express = require("express");
  const cors = require("cors");
  const route = require("./router");
  

  
  const app = express();
  const port = process.env.PORT || 3000;
  
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use(route);

  
  const project = require("./package.json")
  app.listen(port, () => {
    console.log(` ${project.name.toUpperCase()}  port:${port}`);
  });