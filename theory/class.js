class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name is mandatory");
    }
    this.id = id;
    this.name = name;
  }
  setSalary(salary) {
    this.salary = salary;
  }
  getSalary(salary) {
    return this.salary;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
}

class Manager extends Employee {
  setDepartment(department) {
    this.department = department;
  }
  getDepartment(department) {
    return this.department;
  }
}

const EmployeeObject = new Employee(1, "Asad");
const ManagerObject = new Manager(1, "Aziz");
ManagerObject.setDepartment("IT");
console.log(ManagerObject.getDepartment());
