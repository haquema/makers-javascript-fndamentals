class UserBase {
  constructor(array) {
    this.users = array;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    this.users.forEach(user => 
      console.log(user.getName())
    );
  }

  getIntroductions() {
    this.users.forEach(user =>
      console.log(user.getIntroduction())
    );
  }
}

module.exports = UserBase;

// const User = require('./user');
// const UserBase = require('./userBase');
// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];
// const userBase = new UserBase(users);
// userBase.getNames();
