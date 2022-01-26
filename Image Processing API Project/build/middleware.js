"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const app_1 = require("./app");
let imagePath = "";
// Image Processing function
const imageScaling = (imagename, width, heigth) => __awaiter(void 0, void 0, void 0, function* () {
    const orgImagePath = `${app_1.rootPath}/images/${imagename}.jpg`;
    const resizedImagePath = `${app_1.rootPath}/images/resized/${imagename}_${width}_${heigth}.jpg`;
    // If image with required dimension already exists in the resized folder then its path will be used.
    if (fs_1.default.existsSync(resizedImagePath)) {
        imagePath = `/images/resized/${imagename}_${width}_${heigth}.jpg`;
        // If image with required dimension does not exist the image processing function will be called with the given dimensions and the new image path will be used.
    }
    else if (fs_1.default.existsSync(orgImagePath)) {
        yield (0, sharp_1.default)(orgImagePath)
            .resize(width, heigth)
            .toFile(resizedImagePath)
            .then(() => {
            imagePath = `/images/resized/${imagename}_${width}_${heigth}.jpg`;
        });
    }
    // Returning the image path
    return imagePath;
});
exports.default = imageScaling;
