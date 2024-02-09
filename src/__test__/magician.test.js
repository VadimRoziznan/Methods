import Magician from "../js/class/magician";

test('Object properties Magician', () => {
  const character = new Magician('Magician', 'Magician');
  const correct = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(character).toEqual(correct);
});