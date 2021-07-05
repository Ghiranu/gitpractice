let passOrFailBot = class {
  constructor(name, grade, promoted) {
    this.name = name;
    this.grade = grade;
    this.promoted = promoted;
  }

  checkPromoted() {
    return this.grade >= 5
      ? `${this.name} passed the test!`
      : `${this.name} failed the test!`;
  }
};

const student = new passOrFailBot("John", 7, true);
console.log(student.checkPromoted());
