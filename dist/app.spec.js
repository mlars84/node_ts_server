"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
const app_1 = require("./app");
describe('app', () => {
    it('works', () => {
        supertest(app_1.default)
            .get('/')
            .expect('Content-Type', '/json/')
            .expect(200);
    });
});
//# sourceMappingURL=app.spec.js.map