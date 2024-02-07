import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
    this.attack = attack;
    this.defence = defence
  }
}