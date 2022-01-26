"use strict";

import express from "express";
import path from "path";
import { rootPath } from "../app";
import imageScaling from "../middleware";

// Creating Image Router
const imageRouter = express.Router();

imageRouter.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    // Request query
    let {
      query: { imagename, width, height },
    } = req;

    imagename = imagename as unknown as string;
    height = height as unknown as string;
    width = width as unknown as string;

    // If one parameter from the request query is not available, an error message will be sent.
    if (!imagename || !width || !height) {
      res
        .status(400)
        .send(
          "One Request parameter is missing! \n Provide all three parameters required: \n imagename \n width \n height"
        );
      // If all 2 parameters are given the image proccessing function will be called & the resized image will be sent.
    } else {
      const img = await imageScaling(
        imagename,
        parseInt(width),
        parseInt(height)
      );

      if (!img) {
        res.status(400).send("This imagename does not exist");
      }
      res.sendFile(path.join(rootPath, img));
    }
  }
);
export default imageRouter;
module.exports = imageRouter;
