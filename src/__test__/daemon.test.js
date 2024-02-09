import Daemon from "../js/class/daemon";

test('Object properties Daemon', () => {
  const daemon = new Daemon('Daemon', 'Daemon');
  const correct = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(daemon).toEqual(correct);
});

test('Object properties Daemon', () => {
  const daemon = new Daemon('Daemon', 'Daemon');
  const correct = {
    name: 'Daemon',
    type: 'Daemon',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  }
  daemon.levelUp()
  expect(daemon).toThrow(new Error('Нельзя повысить левел умершего'));
});