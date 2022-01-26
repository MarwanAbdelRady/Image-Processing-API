"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("Server", () => {
    describe("Express Jasmine Test", () => {
        it("expect app to be defined", () => {
            expect(app_1.default).toBeDefined();
        });
        it("expect server to return 200 for route: /api", (done) => {
            (0, supertest_1.default)(app_1.default)
                .get("/api")
                .expect(200)
                .end((err) => (err ? done.fail(err) : done()));
        });
    });
});
