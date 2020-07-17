// A student is both a person and a user, by virtue of the fact that it has the attributes
// defined for those interfaces.
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, loginName, email) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.loginName = loginName;
        this.email = email;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greetPerson(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function greetUser(user) {
    return "Hey there, user " + user.loginName + " at " + user.email;
}
var user = new Student("Jane", "M.", "User", "juser", "juser@test.nodomain");
document.body.innerHTML = greetPerson(user);
//document.body.innerHTML = greetUser(user);
