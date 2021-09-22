let randomName = () => {
  let names = ['Bill', 'Anna', 'Maria', 'Sophie', 'Karim', 'Luka'];
  let randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex];
}

module.exports = randomName;