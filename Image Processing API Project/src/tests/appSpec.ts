"use strict";

import request from "supertest";
import app from "../app";

describe("Server", () => {
  describe("Express Jasmine Test", () => {
    it("expect app to be defined", () => {
      expect(app).toBeDefined();
    });

    it("expect server to return 200 for route: /api", (done) => {
      request(app)
        .get("/api")
        .expect(200)
        .end((err) => (err ? done.fail(err) : done()));
    });
  });
});
