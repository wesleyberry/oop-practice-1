let Employee = function(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;

    this.getData = function() {
        return `${this.name} works as a(n) ${this.position} making $${this.salary} a year.`;
    }
};



let Bob = new Employee('Bob', 'Developer', 65000);
console.log(Bob.getData());