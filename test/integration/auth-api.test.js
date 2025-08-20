const request = require("supertest");
const server = require("../../app");

afterAll(async () => {
  server.close();
});
/*
    Registration: email, password & confirm password
    
    Tests:
        1- all fields are required
        2- password must be 8 chars or more
        3- confirm password must match password
        4- all is good, register user

*/

describe("register", () => {
  it("should return 400 if any field is missing", async () => {
    const emailRes = await request(server)
      .post("/api/auth/registration")
      .send({});
    expect(emailRes.status).toBe(400);
    expect(emailRes.body.message).toMatch("email is required");

    const passRes = await request(server)
      .post("/api/auth/registration")
      .send({ email: "test@test.com" });
    expect(passRes.status).toBe(400);
    expect(passRes.body.message).toMatch("password is required");
  });
  it("should return 400 if password < 8 chars", async () => {
    const passRes = await request(server)
      .post("/api/auth/registration")
      .send({ email: "test@test.com", password: "123" });
    expect(passRes.status).toBe(400);
    expect(passRes.body.message).toMatch("password must be at least 8 chars");
  });
  it("should return 400 if confirm password does not match password", async () => {
    const passRes = await request(server).post("/api/auth/registration").send({
      email: "test@test.com",
      password: "12345678",
      confirmPassword: "123",
    });
    expect(passRes.status).toBe(400);
    expect(passRes.body.message).toMatch(
      "confirm password must match password"
    );
  });
  it("should return 200 if and register user", async () => {
    const res = await request(server).post("/api/auth/registration").send({
      email: "test@test.com",
      password: "12345678",
      confirmPassword: "12345678",
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch("registered successfully");
  });
});
