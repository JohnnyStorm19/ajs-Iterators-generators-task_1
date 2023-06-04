/* eslint-disable no-console */
import Person from './Person';
import Team from './Team';

const team = new Team();
const hero1 = new Person('Legolas', 'Elf', 40, 20);
const hero2 = new Person('Diablo', 'Daemon', 50, 10);
const hero3 = new Person('Ghimley', 'Dwarf', 20, 40);
team.add(hero1);
team.add(hero2);
team.add(hero3);

console.log(team);

for (const person of team) {
  console.log(person);
}
