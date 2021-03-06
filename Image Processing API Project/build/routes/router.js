"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imgRoutes_1 = __importDefault(require("./imgRoutes"));
// Creating Router
const router = express_1.default.Router();
// Creating main API endpoint
router.get("/", (req, res) => {
    res.send("This is the Main API");
});
router.use("/images", imgRoutes_1.default);
exports.default = router;
module.exports = router;
