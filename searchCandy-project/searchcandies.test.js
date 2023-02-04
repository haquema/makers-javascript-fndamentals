const searchCandies = require("./searchcandies");

describe("searchCandies", () => {
  it("returns array of all candies beginning with Ma and price less than 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("returns array of all candies beginning with Ma and price less than 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns array of all candies beginning with S and price less than 10", () => {
    expect(searchCandies("S", 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it("returns array of all candies beginning with S and price less than 4", () => {
    expect(searchCandies("S", 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it("returns array of all candies beginning with s and price less than 4", () => {
    expect(searchCandies("s", 4)).toEqual([ 'Skitties', 'Skittles' ]);
    expect(searchCandies("ma", 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
})