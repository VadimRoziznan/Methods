import Swordsman from "../js/class/swordsman";

test('Object properties Swordsman', () => {
  const character = new Swordsman('Swordsman', 'Swordsman');
  const correct = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(character).toEqual(correct);
});
