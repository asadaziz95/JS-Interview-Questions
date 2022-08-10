var Employee = function(id,name) {
    if (!id || !name) {
      throw new Error("Employee id and name is mandatory");
    }
    this.id = id;
    this.name = name;
  
}

Employee.prototype.setSalary= function(salary) {
  this.salary = salary;
}
Employee.prototype.getSalary= function() {
  return this.salary;
}
Employee.prototype.getId()= function() {
  return this.id;
}

Employee.prototype.setId()= function(id) {
  this.id = id;
}
Employee.prototype.getName()= function() {
  return this.name;
}
Employee.prototype.getName()= function() {
  this.name = name;
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
