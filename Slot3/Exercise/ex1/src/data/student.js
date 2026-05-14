class Student {
  constructor(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }
}

const students = [
  new Student(1, "John Doe", "../../public/images/150.jpeg"),
  new Student(2, "Jane Smith", "../../public/images/151.jpeg"),
  new Student(3, "David Tran", "../../public/images/152.jpeg"),
];

export { Student, students };
