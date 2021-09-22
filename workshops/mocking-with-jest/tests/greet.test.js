const greet = require('../src/greet');
const randomName = require('../src/randomName');

jest.mock('../src/randomName.js');

describe('greet', () => {
  it('should greet name', () => {
    randomName.mockReturnValue('Anna');
    expect(greet()).toBe(`Hello there Anna!`)
  });
});