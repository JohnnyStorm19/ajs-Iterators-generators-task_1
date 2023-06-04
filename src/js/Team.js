export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.add(character);
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.toArray();
    return {
      next() {
        index += 1;
        if (index === data.length) {
          return { done: true, value: undefined };
        }
        return { value: data[index], done: false };
      },
    };
  }
}
