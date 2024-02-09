import Character from "../js/class/character";

test('Object properties Character', () => {
  const character = new Character('Swordsman', 'Swordsman');
  const correct = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  }
  expect(character).toEqual(correct);
});

test('Object properties Character Error name', () => {
  const characterWithInvalidName = () =>  new Character(22, 'Magician');
  expect(characterWithInvalidName).toThrow(new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.'));
});

test('Object properties Character Error type', () => {
  const characterWithInvalidType = () =>  new Character('Somebody', 'Magicians');
  expect(characterWithInvalidType).toThrow(new Error('Не верный тип'));
});