import Character from "../js/character";
import Bowerman from "../js/bowerman";
import Swordsman from "../js/swordsman";
import Magician from "../js/magician";
import Daemon from "../js/daemon";
import Undead from "../js/undead";
import Zombie from "../js/zombie";

test('Object properties Character Error name', () => {
  const characterWithInvalidName = () =>  new Character(22, 'Magician');
  expect(characterWithInvalidName).toThrow( new Error('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.'));
});

test('Object properties Character Error type', () => {
  const characterWithInvalidType = () =>  new Character('Somebody', 'Magicians');
  expect(characterWithInvalidType).toThrow( new Error('Не верный тип'));
});

test('Object properties Character', () => {
  const response = new Character('Somebody', 'Magician', 100, 1, 25, 25);
  expect(response.name).toBe('Somebody');
  expect(response.type).toBe('Magician');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(25);
  expect(response.defence).toBe(25);
});

test('Object properties Character levelUp', () => {
  const testLevelUp = new Character('Somebody', 'Magician', 72, 1, 25, 25);
  testLevelUp.levelUp()
  expect(testLevelUp.health).toBe(100);
  expect(testLevelUp.level).toBe(2);
  expect(testLevelUp.attack).toBe(30);
  expect(testLevelUp.defence).toBe(30);
});

test('Object properties Character Error levelUp', () => {
  const testInvalidLevelUp = () => new Character('Somebody', 'Magician', 0,).levelUp();
  expect(testInvalidLevelUp).toThrow( new Error('Нельзя повысить левел умершего'));
});

test('Object properties Character damage', () => {
  const testDamage = new Character('Somebody', 'Magician', 100, 1, 25, 25);
  testDamage.damage(14)
  expect(testDamage.health).toBe(89.5);
});

test('Object properties Character Error damage', () => {
  const testInvalidDamage = () => new Character('Somebody', 'Magician', 0,).damage(14);
  expect(testInvalidDamage).toThrow( new Error('Нельзя атаковать умершего'));
});


test('Object properties Bowerman', () => {
  const response = new Bowerman('Ilon', 'Bowerman');
  expect(response.name).toBe('Ilon');
  expect(response.type).toBe('Bowerman');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(25);
  expect(response.defence).toBe(25);
});

test('Object properties Swordsman', () => {
  const response = new Swordsman('Яна Егорян', 'Swordsman');
  expect(response.name).toBe('Яна Егорян');
  expect(response.type).toBe('Swordsman');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(40);
  expect(response.defence).toBe(10);
});

test('Object properties Magician', () => {
  const response = new Magician('Гэндальф', 'Magician');
  expect(response.name).toBe('Гэндальф');
  expect(response.type).toBe('Magician');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(10);
  expect(response.defence).toBe(40);
});

test('Object properties Daemon', () => {
  const response = new Daemon('Betrezen', 'Daemon');
  expect(response.name).toBe('Betrezen');
  expect(response.type).toBe('Daemon');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(10);
  expect(response.defence).toBe(40);
});

test('Object properties Undead', () => {
  const response = new Undead('Нежить', 'Undead');
  expect(response.name).toBe('Нежить');
  expect(response.type).toBe('Undead');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(25);
  expect(response.defence).toBe(25);
});

test('Object properties Zombie', () => {
  const response = new Zombie('Зомби', 'Zombie');
  expect(response.name).toBe('Зомби');
  expect(response.type).toBe('Zombie');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(40);
  expect(response.defence).toBe(10);
});

