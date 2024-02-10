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
