import Undead from "../js/class/undead";

test('Object properties Bowerman', () => {
  const character = new Undead('Undead', 'Undead');
  const correct = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(character).toEqual(correct);
});
