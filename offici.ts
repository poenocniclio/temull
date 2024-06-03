class StudentManager {
  private students: string[];

  constructor() {
    this.students = [];
  }

  addStudent(studentName: string): void {
    if (!this.students.includes(studentName)) {
      this.students.push(studentName);
    }
  }

  removeStudent(studentName: string): void {
    this.students = this.students.filter(s => s !== studentName);
  }

  listStudents(): string[] {
    return this.students;
  }
}
