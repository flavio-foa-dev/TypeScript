function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    return Student;
}());
var fullname = new Student('flavio', 'flavio', 'flav');
console.log(fullname);
