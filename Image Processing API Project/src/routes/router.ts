"use strict";

import express from "express";
import imageRouter from "./imgRoutes";

// Creating Router
const router = express.Router();

// Creating main API endpoint
router.get("/", (req: express.Request, res: express.Response): void => {
  res.send("This is the Main API");
});

router.use("/images", imageRouter);

export default router;
module.exports = router;
