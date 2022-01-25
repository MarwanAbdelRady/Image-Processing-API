"use strict";

import fs from "fs";
import sharp from "sharp";
import { rootPath } from "./app";

let imagePath = "";

// Image Processing function
const imageScaling = async (
  imagename: string,
  width: number,
  heigth: number
): Promise<string> => {
  const orgImagePath = `${rootPath}/images/${imagename}.jpg`;
  const resizedImagePath = `${rootPath}/images/resized/${imagename}_${width}_${heigth}.jpg`;

  // If image with required dimension already exists in the resized folder then its path will be used.
  if (fs.existsSync(resizedImagePath)) {
    imagePath = `/images/resized/${imagename}_${width}_${heigth}.jpg`;
    // If image with required dimension does not exist the image processing function will be called with the given dimensions and the new image path will be used.
  } else if (fs.existsSync(orgImagePath)) {
    await sharp(orgImagePath)
      .resize(width, heigth)
      .toFile(resizedImagePath)
      .then(() => {
        imagePath = `/images/resized/${imagename}_${width}_${heigth}.jpg`;
      });
  }
  // Returning the image path
  return imagePath;
};

export default imageScaling;
