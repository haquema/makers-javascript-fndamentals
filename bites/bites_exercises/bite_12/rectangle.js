class Rectangle {

  // A constructor, to give initial arguments.
  constructor(height, width) {

    // We can define attributes stored on the instance with `this`
    this.height = height;
    this.width = width;
  }

  // A method.
  getArea() {
    return this.height * this.width;
  }
}

// Export the class
module.exports = Rectangle;