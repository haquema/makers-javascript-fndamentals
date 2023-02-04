const multiply = require("./multiply");

describe("multiply", () => {
  it("returns the product of 2 and 5", () => {
    expect(multiply(2, 5)).toBe(10);
  });

  it("returns the product of 4 and 7", () => {
    expect(multiply(4, 7)).toBe(28);
  });
});
