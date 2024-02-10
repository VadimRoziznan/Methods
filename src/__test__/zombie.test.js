import Zombie from "../js/class/zombie";

test('Object properties Bowerman', () => {
  const zombie = new Zombie('Zombie', 'Zombie');
  const correct = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(zombie).toEqual(correct);
});
