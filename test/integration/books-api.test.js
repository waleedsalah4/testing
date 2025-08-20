it("should return true", () => {});

// const request = require("supertest");
// const server = require("../../app");
// const mongoose = require("../../config/config");
// const bookModel = require("../../src/api/resources/books/books.model");

// afterEach(async () => {
//   await bookModel.deleteMany({});
// });

// afterAll(async () => {
//   server.close();
//   await mongoose.disconnect();
// });

// describe("getBook", () => {
//   it("should return 200 and get book from db", async () => {
//     const book = await bookModel.create({ title: "React" });
//     const res = await request(server).get(`/api/books/${book._id}`);
//     expect(res.status).toBe(200);
//     expect(res.body.message).toMatch("book retrieved successfully");
//     expect(res.body.data.book).toMatchObject({ title: "React" });
//   });
//   it("should return 404 if book not found", async () => {
//     const res = await request(server).get(
//       `/api/books/68a482aefd770c1326f69708`
//     );
//     expect(res.status).toBe(404);
//     expect(res.body.message).toMatch("404 not found");
//   });
//   it("should return 500", async () => {
//     const res = await request(server).get(`/api/books/1472747`);
//     expect(res.status).toBe(500);
//   });
// });

// describe("updateBook", () => {
//   it("should return 404 if book not found", async () => {
//     const res = await request(server).put(
//       `/api/books/68a482aefd770c1326f69708`
//     );
//     expect(res.status).toBe(404);
//     expect(res.body.message).toMatch("404 not found");
//   });
//   it("should return 200 and update book in db", async () => {
//     const book = await bookModel.create({ title: "React" });
//     const res = await request(server)
//       .put(`/api/books/${book._id}`)
//       .send({ title: "Reactjs" });
//     expect(res.status).toBe(200);
//     expect(res.body.message).toMatch("book updated successfully");
//     expect(res.body.data.book).toMatchObject({ title: "Reactjs" });
//   });
// });

// describe("deleteBook", () => {
//   it("should return 404 if book not found", async () => {
//     const res = await request(server).put(
//       `/api/books/68a482aefd770c1326f69708`
//     );
//     expect(res.status).toBe(404);
//     expect(res.body.message).toMatch("404 not found");
//   });
//   it("should return 200 and delete from db", async () => {
//     const book = await bookModel.create({ title: "React" });
//     const res = await request(server).delete(`/api/books/${book._id}`);
//     expect(res.status).toBe(200);
//     expect(res.body.message).toMatch("book deleted successfully");
//   });
// });
