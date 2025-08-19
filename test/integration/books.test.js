require("../../config/config");
const bookService = require("../../src/api/resources/books/books.service");
const bookModel = require("../../src/api/resources/books/books.model");
const mongoose = require("../../config/config");

beforeEach(async () => {
  await bookModel.deleteMany({});
});

afterAll(async () => {
  await bookModel.deleteMany({});
  await mongoose.disconnect();
});

describe("getBooks", () => {
  it("should return empty array", async () => {
    const books = await bookService.getBooks();
    expect(books.length).toBe(0);
  });

  it("should return 2 books", async () => {
    await bookModel.insertMany([{ title: "CSS" }, { title: "HTML" }]);
    const books = await bookService.getBooks();
    expect(books.length).toBe(2);
    expect(books[0]).toMatchObject({ title: "CSS" });
  });
});

describe("create book", () => {
  it("should create book with title JAVA", async () => {
    await bookService.createBook({ title: "JAVA" });
    const books = await bookModel.find({});
    expect(books.length).toBe(1);
    expect(books[0]).toMatchObject({ title: "JAVA" });
  });
});
