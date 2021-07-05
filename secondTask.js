let Robot = class {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  sayHello() {
    return `Hello, i'm ${this.name} and i have a color of ${this.color}`;
  }
};

const bumbleBee = new Robot("BumbleBee", "yellow");
console.log(optimusPrime.sayHello());
