"use strict";

import express from "express";
import path from "path";
import router from "./routes/router";

const app = express(); // Create an express application
const port = 3000; // Default port

// Path to root directory "src"
export const rootPath = path.resolve(__dirname);

// Static file servers that point to the original and resized images library
app.use("/resized", express.static(path.join(__dirname, "images/resized")));
app.use("/images", express.static(path.join(__dirname, "images")));

// Call router
app.use("/api", router);

// Start Server
app.listen(port, () => {
  console.log(`Running Server on port : ${port}`);
});

export default app;
