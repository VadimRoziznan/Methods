import Bowerman from "../js/class/bowerman";

test('Object properties Bowerman', () => {
  const bowerman = new Bowerman('Bowerman', 'Bowerman');
  const correct = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(bowerman).toEqual(correct);
});

test('Object properties Bowerman levelUp', () => {
  const bowerman = new Bowerman('Bowerman', 'Bowerman');
  bowerman.levelUp()
  const correct = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  }
  expect(bowerman).toEqual(correct);
});

test('Object properties Bowerman damage', () => {
  const bowerman = new Bowerman('Bowerman', 'Bowerman');
  bowerman.damage(14)
  const correct = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 89.5,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(bowerman).toEqual(correct);
});