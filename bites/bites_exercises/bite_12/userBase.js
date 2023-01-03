class UserBase {
  constructor(array) {
    this.names = [];
    array.forEach((user) => this.names.push(user.getName()));
  }

  count() {
    return this.names.length;
  }

  getNames() {
    this.names.forEach(name => console.log(name));
  }

  getIntroductions() {
    this.names.forEach((name) =>
      console.log(`Hi, my name is ${name}`)
    );
  }
}

module.exports = UserBase;
