import Person from '../Person';
import Team from '../Team';

test('Создаются инстансы классов Person и Team', () => {
  const team = new Team();
  const hero1 = new Person('Legolas', 'Elf', 40, 20);
  const resTeam = { members: new Set() };
  const resHero = {
    name: 'Legolas',
    type: 'Elf',
    attack: 40,
    defence: 20,
    level: 1,
    health: 50,
  };
  expect(team).toEqual(resTeam);
  expect(hero1).toEqual(resHero);
});
test('Инстанс класса Person успешно добавляются в инстанс класса Team', () => {
  const team = new Team();
  const hero1 = new Person('Legolas', 'Elf', 40, 20);
  const hero2 = new Person('Diablo', 'Daemon', 50, 10);
  team.add(hero1);
  team.add(hero2);
  const res = {
    members: new Set([
      {
        name: 'Legolas',
        type: 'Elf',
        attack: 40,
        defence: 20,
        level: 1,
        health: 50,
      },
      {
        name: 'Diablo',
        type: 'Daemon',
        attack: 50,
        defence: 10,
        level: 1,
        health: 50,
      },
    ]),
  };
  expect(team).toEqual(res);
});
test('Осуществляется итерация по объектам персонажей', () => {
  const team = new Team();
  const hero1 = new Person('Legolas', 'Elf', 40, 20);
  const hero2 = new Person('Diablo', 'Daemon', 50, 10);
  team.add(hero1);
  team.add(hero2);
  const recieved = [];
  for (const person of team) {
    recieved.push(person);
  }
  const res = [{
    name: 'Legolas',
    type: 'Elf',
    attack: 40,
    defence: 20,
    level: 1,
    health: 50,
  },
  {
    name: 'Diablo',
    type: 'Daemon',
    attack: 50,
    defence: 10,
    level: 1,
    health: 50,
  }];
  expect(recieved).toEqual(res);
});
