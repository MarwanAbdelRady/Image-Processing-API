"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootPath = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)(); // Create an express application
const port = 3000; // Default port
// Path to root directory "src"
exports.rootPath = path_1.default.resolve(__dirname);
// Static file servers that point to the original and resized images library
app.use("/resized", express_1.default.static(path_1.default.join(__dirname, "images/resized")));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "images")));
// Call router
app.use("/api", router_1.default);
// Start Server
app.listen(port, () => {
    console.log(`Running Server on port : ${port}`);
});
exports.default = app;
