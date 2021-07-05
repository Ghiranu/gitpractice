let Robot = class {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  sayHello() {
    return `Hello, i'm ${this.name} and i have a color of ${this.color}`;
  }
};

const optimusPrime = new Robot("Optimus Prime", "red and blue");
console.log(optimusPrime.sayHello());
