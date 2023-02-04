const Candy = require('./candy')

describe("Candy", () => {
  describe("getName()", () => {
    it("returns the name of a given candy", () => {
      let candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toBe('Mars')
    })
    it("returns the name of a different candy", () => {
      let candy = new Candy('Snickers', 5.99);
      expect(candy.getName()).toBe('Snickers')
    })
  })
  
  describe("getPrice()", () => {
    it("returns the price of the candy", () => {
      let candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toBe(4.99)
    }) 
    it("returns the price of the candy", () => {
      let candy = new Candy('Snickers', 5.99);
      expect(candy.getPrice()).toBe(5.99)
    }) 
  })
})