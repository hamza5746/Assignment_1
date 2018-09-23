var Student = /** @class */ (function () {
    function Student(name, age, rollNumber) {
        this.name = name;
        this.age = age;
        this.rollNumber = rollNumber;
    }
    return Student;
}());
var std = new Student("Hamza", 22, 1512183);
console.log(std.name);
