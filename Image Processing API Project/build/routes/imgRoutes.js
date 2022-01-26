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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app_1 = require("../app");
const middleware_1 = __importDefault(require("../middleware"));
// Creating Image Router
const imageRouter = express_1.default.Router();
imageRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Request query
    let { query: { imagename, width, height }, } = req;
    imagename = imagename;
    height = height;
    width = width;
    // If one parameter from the request query is not available, an error message will be sent.
    if (!imagename || !width || !height) {
        res
            .status(400)
            .send("One Request parameter is missing! \n Provide all three parameters required: \n imagename \n width \n height");
        // If all 2 parameters are given the image proccessing function will be called & the resized image will be sent.
    }
    else {
        const img = yield (0, middleware_1.default)(imagename, parseInt(width), parseInt(height));
        if (!img) {
            res.status(400).send("This imagename does not exist");
        }
        res.sendFile(path_1.default.join(app_1.rootPath, img));
    }
}));
exports.default = imageRouter;
module.exports = imageRouter;
