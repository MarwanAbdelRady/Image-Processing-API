"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootPath = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./routes/router"));
exports.app = (0, express_1.default)();
const port = 3000;
exports.rootPath = path_1.default.resolve(__dirname);
exports.app.use("/resized", express_1.default.static(path_1.default.join(__dirname, "images/resized")));
exports.app.use("/images", express_1.default.static(path_1.default.join(__dirname, "images")));
exports.app.use("/api", router_1.default);
exports.app.listen(port, () => {
    console.log(`Running Server on port : ${port}`);
});
