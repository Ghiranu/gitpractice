let LearningPath = class {
  constructor(student, topic, learningStatus) {
    this.student = student;
    this.topic = topic;
    this.learningStatus = learningStatus;
  }

  currentLearningTopic() {
    return this.learningStatus === true
      ? `${this.student} is currently learning ${this.topic}`
      : `${this.student} is chilling.`;
  }
};

const first = new LearningPath("Ghiran Ionut-Sorin", "git", true);
console.log(first.currentLearningTopic());
