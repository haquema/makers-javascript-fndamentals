const multiply = require("./multiply");

describe("multiply", () => {
  it("returns the product of two integers", () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2, 6)).toBe(12);
  });
});
